const { createCategory } = require('../services/category.service');
const categoryService = require('../services/category.service');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await createCategory(name);

  if (type) {
    return res.status(type).json(message);
  }

  res.status(201).json(message);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = { createCategoryController, getAllCategories };
