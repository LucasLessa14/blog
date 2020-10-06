const routes = require('express').Router();
const AdminAuth = require('./middlewares/AdminAuth')
const ArticleController = require('./controllers/ArticleController')
const UserController = require('./controllers/UserController')

routes
    // CRUD - Articles
    .get('/articles', ArticleController.index)
    .get('/articles/:id', ArticleController.getArticleById)
    .get('/articles/slug/:slug', ArticleController.getArticleBySlug)
    .post('/articles', AdminAuth, ArticleController.create)
    .put('/articles', AdminAuth, ArticleController.edit)
    .delete('/articles/:id', AdminAuth, ArticleController.remove)
    // CRUD - Users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users', UserController.edit)
    .delete('/users/:id', UserController.remove)
    // Authenticate - Users
    .post('/login', UserController.login)
    .post('/validate', AdminAuth, UserController.validate);

module.exports = routes;