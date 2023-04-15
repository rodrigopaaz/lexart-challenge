const { Product } = require("../models");
const { freeMarketData, buscapeData } = require("./data");

const findAll = async () => {
  const data = await Product.findAll();
  return data;
};

const createMany = async (site, category) => {
  const getData = site === "buscape" ? buscapeData : freeMarketData;
  const data = await getData(category);
  Product.bulkCreate(data);
  return JSON.stringify(data);
};

module.exports = {
  createMany,
  findAll,
};
