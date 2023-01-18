const { User } = require('../models');
const { createToken } = require('../helper/jwt');

const loginService = {
  login: async ({ email, password }) => {
    const findUser = await User.findOne({
      where: { email, password },
    });

    if (!findUser) return false;

    const token = createToken({ email: findUser.email });

    return token;
  }, 
};

module.exports = loginService;
