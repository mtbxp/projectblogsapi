const { BlogPost, User, Category } = require('../models');

const getAll = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
});

const getPostById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
  getAll,
  getPostById,
};