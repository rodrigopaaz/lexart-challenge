const axios = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');
const { Site } = require('../../models');

const siteFactory = async (config) => {
  const {
    siteUrl, endpoint, category, searchId, selectors, siteId,
  } = config;
  const { data } = await axios.get(`${siteUrl}/${endpoint}`);
  const $ = cheerio.load(data);
  const allProducts = [];
  const { id: categoryId } = await Category.findOne({ where: { name: category } });
  /*   const { id: siteId } = await Site.findOne({ where: { name: site } }); */
  $(selectors.productContainerSelector).each(async (e, i) => {
    const getLink = $(i).find(selectors.productLinkSelector).attr('href') || '';

    if (!getLink.includes(siteUrl)) {
      const product = {
        title: $(i).find(selectors.productTitleSelector).text(),
        categoryId,
        siteId,
        searchId,
        price: $(i).find(selectors.productPriceSelector).text(),
        linkUrl: siteUrl + getLink,
      };
      allProducts.push(product);
    }
  });
  const urlRegex = /^(http|https):\/\/[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

  const filteredProducts = allProducts.filter(
    (product) => product.price && typeof product.title === 'string' && product.title.length < 100 && urlRegex.test(product.linkUrl),
  );

  const getValidImage = async (product) => {
    const fileData = await axios.get(product.linkUrl);
    const $$ = cheerio.load(fileData.data);
    const imageSrc = $$(selectors.productImageContainerSelector)
      .find(selectors.productImageSelector)
      .attr('src');
    return {
      ...product,
      imageUrl: imageSrc,
    };
  };

  const images = await Promise.all(filteredProducts.map(getValidImage));
  return images;
};

module.exports = siteFactory;
