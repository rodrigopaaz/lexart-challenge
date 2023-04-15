const { Product, Site, Category } = require("../models");
const { freeMarketData, buscapeData } = require("./data");

const findAll = async () => {
  const data = await Product.findAll({
    include: [
      {
        model: Site,
        as: "siteName",
      },
      {
        model: Category,
        as: "categoryName",
      },
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
