const { createToken } = require('../helper/jwt');
const { User } = require('../models');

const createUser = async (displayName, email, password, image = '') => {
  const { dataValues } = await User.create(
    { displayName, email, password, image },
  );
  const { ...user } = dataValues;
  const token = createToken(user);
  return { type: null, message: user, token };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
  return { type: null, message: users };
};

module.exports = {
  createUser,
  getAll,
};
