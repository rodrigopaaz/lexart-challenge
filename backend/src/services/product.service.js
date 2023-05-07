const {
  Product, Search, Category, Site,
} = require('../models');
const { freeMarketData, buscapeData, siteFactory } = require('./data');
const site = require('./data/sites/sites');

const findAll = () => {
  const data = Product.findAll({
    include: [
      { model: Search, as: 'search' },
      { model: Category, as: 'categoryName' },
      { model: Site, as: 'siteName' },
    ],
  });
  return data;
};

const createMany = async (siteName, category, search) => {
  const siteData = site[siteName](category, search, siteName);
  /*   const getData = siteFactory(siteData); */
  const data = await siteFactory(siteData);
  console.log(data);
  Product.bulkCreate(data);
  return JSON.stringify(data);
};

module.exports = {
  createMany,
  findAll,
};
