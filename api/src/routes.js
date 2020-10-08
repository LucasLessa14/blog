const routes = require('express').Router();
const AdminAuth = require('./middlewares/AdminAuth')
const CategoryController = require('./controllers/CategoryController')
const ArticleController = require('./controllers/ArticleController')
const UserController = require('./controllers/UserController')

routes
    // CRUD - Users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users', UserController.edit)
    .delete('/users/:id', UserController.remove)
    // Authenticate - Users
    .post('/login', UserController.login)
    .post('/validate', AdminAuth, UserController.validate)
    // .post('/recoverpassword', UserController.recoverPassword)
    // .post('/changepassword', UserController.changePassword)
    // CRUD - Articles
    .get('/articles', ArticleController.index)
    .get('/articles/:id', ArticleController.getArticleById)
    .get('/articles/slug/:slug', ArticleController.getArticleBySlug)
    .post('/articles', AdminAuth, ArticleController.create)
    .put('/articles', AdminAuth, ArticleController.edit)
    .delete('/articles/:id', AdminAuth, ArticleController.remove)
    // CRUD - Categories
    .get('/categories', CategoryController.index)
    .get('/categories/:slug', CategoryController.findArticlesByCategory)
                // .get('/categories/slug/:slug', ArticleController.getArticleBySlug)
                // .post('/categories', AdminAuth, ArticleController.create)
                // .put('/categories', AdminAuth, ArticleController.edit)
                // .delete('/categories/:id', AdminAuth, ArticleController.remove)

module.exports = routes;