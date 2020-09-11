const routes = require('express').Router();
const ArticleController = require('./controllers/ArticleController')
const UserController = require('./controllers/UserController')

routes
    // CRUD - Articles
    .get('/articles', ArticleController.index)
    .post('/articles', ArticleController.create)
    .put('/articles', ArticleController.edit)
    .delete('/articles/:id', ArticleController.remove)
    // CRUD - Users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users', UserController.edit)
    .delete('/users/:id', UserController.remove)

module.exports = routes;