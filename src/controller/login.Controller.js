const loginService = require('../services/login.services');

const loginController = async (req, res) => {
    try {
     const { email, password } = req.body;
     const token = await loginService.login({ email, password });

    if (!token) return res.status(400).json({ message: 'Invalid fields' });
     return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

module.exports = loginController;
