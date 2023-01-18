const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { User } = require('../models');

const validToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const tokenDecoder = jwt.verify(authorization, JWT_SECRET);
    const user = await User.findOne({ where: { email: tokenDecoder.email } });
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validToken;
