const { Category } = require("../../models");
const { default: axios } = require("axios");
const cheerio = require("cheerio");

const FreeMarketProducts = async (
  category,
  { id: searchId, description: search = "" }
) => {
  const meliCategory = `${category} ${search}`;
  const siteUrl = "https://lista.mercadolivre.com.br";
  const { data } = await axios.get(`${siteUrl}/${meliCategory}`);
  const { id } = await Category.findOne({ where: { name: category } });
  const $ = cheerio.load(data);
  const allProducts = [];
  $("ol li").each(async (e, i) => {
    const getLink =
      $(i).find("div .ui-search-result__image a").attr("href") || "";
    const product = {
      title: $(i).find(".ui-search-item__group a h2").text(),
      price: $(i)
        .find(".ui-search-price__second-line .price-tag .price-tag-amount")
        .text()
        .split("R$")
        .slice(1)[0],
      categoryId: id,
      siteId: 1,
      searchId,
      linkUrl: getLink,
      imageUrl: $(i).find(".ui-search-result__image div img").data("src"),
    };
    allProducts.push(product);
    return product;
  });
  const filteredProducts = allProducts.filter(
    (e, i) => e.price && typeof e.title && e.imageUrl
  );

  return filteredProducts;
};

module.exports = FreeMarketProducts;
