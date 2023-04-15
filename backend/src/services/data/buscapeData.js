const { Category } = require("../../models");
const { default: axios } = require("axios");
const cheerio = require("cheerio");

const buscapeProducts = async (category) => {
  const siteUrl = `https://buscape.com.br`;
  const { data } = await axios.get(`${siteUrl}/${category}`);
  const $ = cheerio.load(data);
  const allProducts = [];
  const links = [];
  const { id } = await Category.findOne({ where: { name: category } });

  $(".col-lg-9 div").each(async (e, i) => {
    const getLink =
      $(i).find(".SearchCard_ProductCard_Inner__7JhKb").attr("href") || "";

    if (!getLink.includes("buscape")) {
      const product = {
        title: $(i).find("a h2").text(),
        categoryId: id,
        siteId: 2,
        price: $(i)
          .find(
            "a .SearchCard_ProductCard_Description__fGXI3 .Text_Text__h_AF6.Text_MobileHeadingS__Zxam2"
          )
          .text()
          .slice(3)
          .split("R$")[0]
          .split(",00")[0],
        linkUrl: getLink,
      };
      allProducts.push(product);
      return product;
    }
  });
  const filteredProducts = allProducts.filter(
    (e, i) => e.price && typeof e.title && e.title.length < 100
  );

  const getValidImage = () => {
    return filteredProducts.map(async ({ linkUrl }, i) => {
      const url = "https://buscape.com.br";
      const fileData = await axios.get(url + linkUrl); //
      const $$ = cheerio.load(fileData.data);
      const imageSrc = $$(".ProductPageBody_ContentBody__De_1M")
        .find("div:nth-child(2) img")
        .attr("src");
      const newArray = {
        ...filteredProducts[i],
        imageUrl: imageSrc,
      };
      return newArray;
    });
  };

  const images = await Promise.all(getValidImage());

  return images;
};
module.exports = buscapeProducts;
