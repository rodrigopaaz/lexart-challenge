const { searchService } = require("../services");

const createSearch = async (req, res) => {
  const { searchDescription } = req.body;
  const { id } = await searchService.create(searchDescription);
  return res.status(201).json({ searchId: id });
};

module.exports = {
  createSearch,
};
