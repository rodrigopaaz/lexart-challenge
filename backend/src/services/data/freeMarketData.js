const { Category } = require("../../models");
const { default: axios } = require("axios");
const cheerio = require("cheerio");

const FreeMarketProducts = async (category) => {
  const { data } = await axios.get(
    `https://lista.mercadolivre.com.br/${category}`
  );
  const { id } = await Category.findOne({ where: { name: category } });
  const $ = cheerio.load(data);
  const allProducts = [];
  $("ol li").each(async (e, i) => {
    const product = {
      title: $(i).find(".ui-search-item__group a h2").text(),
      price: $(i)
        .find(".ui-search-price__second-line .price-tag .price-tag-amount")
        .text()
        .split("R$")
        .slice(1)[0],
      categoryId: id,
      siteId: 1,
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
