const { productService } = require("../services");
const { createMany } = require("../services/product.service");

const createCategory = async (req, res) => {
  const { site, category } = req.body;
  const data = await createMany(site, category);
  return res.status(201).json(data);
};

const findAll = async (req, res) => {
  const dataService = await productService.findAll();
  res.status(200).json(dataService);
};

module.exports = {
  createCategory,
  findAll,
};
