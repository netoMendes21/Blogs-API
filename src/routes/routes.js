const express = require('express');
const controllerLogin = require('../controller/controllerLogin');
const { addNewUser, simpleUsers, getUserById } = require('../controller/controllerUser'); 
const authenticateMiddleware = require('../middlewares/authenticate');

const route = express.Router();

route.use(express.json());

route.post('/login', controllerLogin);

route.post('/user', addNewUser);
route.use(authenticateMiddleware);
route.get('/user', simpleUsers);
route.get('/user/:id', getUserById);

module.exports = route;