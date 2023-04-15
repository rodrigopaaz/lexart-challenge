const { categoryService } = require("../services");

const createCategory = async (req, res) => {
  const data = req.body;
  const dataService = await categoryService.create(data);
  return res.status(201).json(dataService);
};

const findAll = async (req, res) => {
  const dataService = await categoryService.findAll();
  res.status(200).json(dataService);
};

module.exports = {
  createCategory,
  findAll,
};
