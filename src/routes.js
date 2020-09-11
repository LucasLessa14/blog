const routes = require('express').Router();
const ArticleController = require('./controllers/ArticleController')

routes
    // CRUD - Articles
    .get('/articles', ArticleController.index)
    .post('/articles', ArticleController.create)
    .put('/articles', ArticleController.edit)
    .delete('/articles/:id', ArticleController.remove)

module.exports = routes;