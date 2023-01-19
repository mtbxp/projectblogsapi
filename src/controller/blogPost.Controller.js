const blogPostService = require('../services/blogPost.service');

const getAll = async (req, res) => {
  try {
    const posts = await blogPostService.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await blogPostService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getPostById,
};