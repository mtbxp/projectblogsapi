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

const updatePostById = async (idPost, userId, title, content) => { 
  const update = BlogPost.update({ title, content }, { where: { id: idPost, userId } });
  return update;
};

const deleteUser = async (idUser) => {
  const deleted = User.destroy({ where: { id: idUser } });
  return deleted;
};

module.exports = {
  getAll,
  getPostById,
  updatePostById,
  deleteUser,
};