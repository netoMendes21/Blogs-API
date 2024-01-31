const express = require('express');
const controllerLogin = require('../controller/controllerLogin');

const route = express.Router();

route.use(express.json());

route.post('/login', controllerLogin);

module.exports = route;