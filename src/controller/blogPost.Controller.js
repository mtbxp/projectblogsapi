const PostService = require('../services/blogPost.service');

const ERRO_INTERNO = 'Erro interno';

const createBlogPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const newPost = await PostService.createBlogPost({ userId, title, content, categoryIds });
    return res.status(201).json(newPost);
  } catch (err) {
    return res
      .status(500)
      .json({ message: ERRO_INTERNO, error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await PostService.getAll();
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
    const post = await PostService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePostById = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = req.user;

    const [updatedPost] = await PostService.updatePostById(id, userId, title, content);
    if (!updatedPost) return res.status(401).json({ message: 'Unauthorized user' });
    const post = await getPostById(req, res);
    return post; 
};

const deleteUser = async (req, res) => { 
    const { id: userId } = req.user;
    await PostService.deleteUser(userId);    
    return res.status(204).end();    
};

const getPostsByQuery = async (req, res) => {
  const { q } = req.query;
  const { status, posts, message } = await PostService.getPostsByQuery(q);
  if (message) return res.status(status).json({ message });
  res.status(status).json(posts);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const { status, message } = await PostService.deleteById(user, id);

  return res.status(status).json({ message });
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    const { id: userId } = req.user;
    const post = await PostService.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    const postId = await PostService.deletePostById(id, userId);
    if (postId === 0) return res.status(401).json({ message: 'Unauthorized user' });
    return res.status(204).end();    
};

module.exports = {
  getAll,
  getPostById,
  updatePostById,
  deleteUser,
  createBlogPost,
  getPostsByQuery,
  deleteById,
  deletePostById,
};