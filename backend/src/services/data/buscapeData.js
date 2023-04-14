const { Category } = require("../../models");
const { default: axios } = require("axios");
const cheerio = require("cheerio");

const buscapeProducts = async (category) => {
  const { data } = await axios.get(`https://buscape.com.br/${category}`);
  const $ = cheerio.load(data);
  const allProducts = [];
  const { id } = await Category.findOne({ where: { name: category } });
  $(".col-lg-9 .Hits_Wrapper__3q_7P a").each(async (e, i) => {
    const product = {
      title: $(i)
        .find(
          ".Text_Text__h_AF6.Text_MobileLabelXs__ER_cD.Text_DesktopLabelSAtLarge__baj_g.SearchCard_ProductCard_Name__ZaO5o"
        )
        .text(),
      categoryId: id,
      siteId: 2,
      price: $(i)
        .find(".Text_Text__h_AF6.Text_MobileHeadingS__Zxam2")
        .text()
        .slice(3)
        .split("R$")[0]
        .split(",00")[0],
      imageUrl: $(i)
        .find(
          ".SearchCard_ProductCard_Body__2wM_H .SearchCard_ProductCard_Image__ffKkn span img"
        )
        .attr("src"),
    };
    allProducts.push(product);
  });
  const filteredProducts = allProducts.filter(
    (e, i) => e.price && e.title && e.imageUrl
  );
  return filteredProducts;
};

module.exports = buscapeProducts;
