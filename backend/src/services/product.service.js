const { Product, Search, Category, Site } = require("../models");
const { freeMarketData, buscapeData } = require("./data");

const findAll = (search) => {
  const data = Product.findAll({
    include: [
      { model: Search, as: "search" },
      { model: Category, as: "categoryName" },
      { model: Site, as: "siteName" },
    ],
  });
  return data;
};

const createMany = async (site, category, search) => {
  const getData = site === "buscape" ? buscapeData : freeMarketData;
  const data = await getData(category, search);
  Product.bulkCreate(data);
  return JSON.stringify(data);
};

module.exports = {
  createMany,
  findAll,
};
