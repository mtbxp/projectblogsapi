const { createUser, getAll } = require('../services/user.services');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message, token } = await createUser(displayName, email, password, image);
  if (type) {
    return res.status(400).json({ message });
  }

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { message } = await getAll();

  res.status(200).json(message);
};

module.exports = { createUserController, getAllUsers };