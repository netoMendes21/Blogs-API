const { BlogPost, Category, PostCategory, User } = require('../models');

const data = [
  {
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
];

const servicesCreateNewPost = async ({ content, categoryIds, title }, userId) => {
  const createNewPost = new Date();
  const categories = await Category.findAll({ where: { id: categoryIds } });
  const body = { title, content, userId, updated: createNewPost, published: createNewPost };
  const post = await BlogPost.create(body);
  const postCategories = categories
    .map((category) => ({ postId: post.id, categoryId: category.id }));
  await PostCategory.bulkCreate(postCategories);
  return post;
};

const servicesGetAllPosts = async (userId) => {
  const searchPost = await BlogPost.findAll({ where: { userId }, include: data });
  return searchPost;
};

module.exports = { servicesCreateNewPost, servicesGetAllPosts };