const routes = require('express').Router();
const ArticlesController = require('./controllers/ArticlesController')

routes.get('/', ArticlesController.index);

module.exports = routes;