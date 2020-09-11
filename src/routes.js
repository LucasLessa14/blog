const routes = require('express').Router();
const ArticleController = require('./controllers/ArticleController')

routes.get('/articles', ArticleController.index);
routes.post('/articles', ArticleController.create);

module.exports = routes;