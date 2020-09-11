# Sistema de blog com página admin

**Version 1.2.0** - [Change log](CHANGELOG.md)

Projeto desenvolvido para fins de aprendizado

## Pré-requisitos
- docker
- nodejs

## Quick start
Criar database em container docker
```
docker run -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=blog -p 5432:5432 -d postgres:12
```
Inicializando a API
```
npm install
npx knex migrate:latest
npx knex seed:run
npm run start
```
## Author
- Lucas Lessa
