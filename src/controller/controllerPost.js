const blogPostService = require('../services/services.post');

const controllerCreateNewPost = async (req, res) => {
  const newPost = req.body;
  const { id } = req.user;
  const post = await blogPostService.servicesCreateNewPost(newPost, id);
  res.status(201).json(post);
};
const controllerGetAllPosts = async (req, res) => {
  const { id } = req.user;
  const newPost = await blogPostService.servicesGetAllPosts(id);
  res.status(200).json(newPost);
};
module.exports = { controllerCreateNewPost, controllerGetAllPosts };