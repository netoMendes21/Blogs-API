const express = require('express');
const controllerLogin = require('../controller/controllerLogin');
const { addNewUser, simpleUsers, getUserById } = require('../controller/controllerUser'); 
const { authenticateMiddleware } = require('../middlewares/authenticate');
const { authenticatePost } = require('../middlewares/authenticatePost');
const { controllerCreateCategory, getAllCategories } = require('../controller/controllerCategory');
const { controllerCreateNewPost, controllerGetAllPosts } = require('../controller/controllerPost');

const route = express.Router();

route.use(express.json());

route.post('/login', controllerLogin);
route.post('/user', addNewUser);
route.use(authenticateMiddleware);
route.get('/user', simpleUsers);
route.get('/user/:id', getUserById);
route.post('/categories', controllerCreateCategory);
route.get('/categories', getAllCategories);
route.post('/post', authenticatePost, controllerCreateNewPost);
route.get('/post', controllerGetAllPosts);

module.exports = route;