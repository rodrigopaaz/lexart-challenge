const { Category } = require("../models");

const findAll = async () => {
  const data = await Category.findAll();
  return data;
};

const create = async (data) => {
  const { title, categoryId, siteId, price, imageUrl } = data;
  const addCategory = await Category.create({
    title,
    categoryId,
    siteId,
    price,
    imageUrl,
  });
  return addCategory;
};

module.exports = {
  create,
  findAll,
};
