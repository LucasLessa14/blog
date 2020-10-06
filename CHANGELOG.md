# Change log

## v2.0.0 - Sep. 11, 2020

Docker-compose implemented

**News features:**
- Postgres implemented
- API dockerized

**Added:**
- api/
- api/init.sh
- api/Dockerfile
- api/.dockerignore
- docker-compose.yml

## v1.2.0 - Sep. 11, 2020

Updated_at SQL function

**News features:**
- Update SQL function
- Deleted_at for User
- Knex seed - quick start

## v1.1.0 - Sep. 11, 2020

USER CRUD
Authenticate JWT
Middleware auth.js, notFound and internalError

**News features:**
- Find All Users
- Create a new User
- Update User
- Delete User
- Recover password
- src/middlewares/auth.js

**Added:**
- src/models/User.js
- src/controllers/UserController.js

## v1.0.0 - Sep. 11, 2020

Articles CRUD

**News features:**
- Find All Articles
- Create a new Article
- Update Article
- Delete Article

**Added:**
- src/models/Article.js
- src/controllers/ArticleController.js

## v0.2.0 - Sep. 10, 2020

Connection with database (postgres)

**News features:**
- Database connection

**Added:**
- [LICENSE.md](LICENSE.md)
- knexfile.js

## v0.1.0 - Sep. 10, 2020

Initial release

**News features:**
- Hello World

**Added:**
- [README.md](README.md)
- [CHANGELOG.md](CHANGELOG.md)
- .env.example
- src/server.js
- src/database/index.js
