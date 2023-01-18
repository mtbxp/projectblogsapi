const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const configJwt = { algorithm: 'HS256',
 expiresIn: '7d',
};

 const createToken = (token) => {
    const tokenCreate = jwt.sign(token, JWT_SECRET, configJwt);

    return tokenCreate;
  };

  const verifyToken = (token) => {
    const tokenVerify = jwt.token(token, JWT_SECRET);

    return tokenVerify;
  };

module.exports = { createToken, verifyToken };