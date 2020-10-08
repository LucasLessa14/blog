# Sistema de blog com página admin

**Version 2.1.0** - [Change log](CHANGELOG.md)

Projeto desenvolvido para fins de aprendizado

## Pré-requisitos
- docker
- docker-compose

## Quick start
Essa aplicação usar docker. O ambiente é criado e configurado de forma automática, desde que você tenha `docker` e `docker-compose` instalado em sua máquina.

### Inicializando a API
```
docker-compose build
docker-compose up
```

## Routes

#### USER :raising_hand:
`GET /users`  
`POST /users`  
`PUT /users`  
`DELETE /users/id` 

#### Authenticate :key:
`POST /login`  
`POST /validate` :lock:  

#### Articles :page_facing_up:
`GET /articles`  
`GET /articles/id`  
`POST /articles` :lock:  
`PUT /articles` :lock:  
`DELETE /articles` :lock: 

#### Categories :pushpin:
`GET /categories`  
`GET /categories/id`  
`POST /categories` :lock:  
`PUT /categories` :lock:  
`DELETE /categories` :lock:  


## Author
- Lucas Lessa
