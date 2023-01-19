const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const configJwt = { algorithm: 'HS256',
 expiresIn: '7d',
};

 const createToken = (token) => {
    const tokenCreate = jwt.sign(token, JWT_SECRET, configJwt);

    return tokenCreate;
  };

  const verifyToken = async (authorization) => {
      const { data } = jwt.verify(authorization, JWT_SECRET);
      const user = await User.findOne({ where: { email: data.email } });
      return { data, user };
  };

module.exports = { createToken, verifyToken };