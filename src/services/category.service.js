const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  if (category === undefined) {
    return { type: 404, message: 'Category not created' };
  }
  return { type: null, message: category };
};

const findAndCountCategorys = async (arr) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: arr,
    },    
  });
  return count;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories, findAndCountCategorys };