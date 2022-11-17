## Description

<p align="center">API criada com <a href="http://nodejs.org" target="_blank">Node.js</a> e Typescript usando o framework <a href="https://expressjs.com/" target="_blank">Express</a>. Foi implementado usando o ORM <a href="http://nodejs.org" target="_blank">Prisma</a>, por tanto pode ser utilizado qualquer banco de dados, como default eu deixei o SQLite pra facilitar e agilizar o teste.</p>

## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# projeto
$ npm run start
```

## Rotas

Autenticação
```
#Autenticar
POST /authenticate
```

Usuário
```
#Listagem
GET /user

#Criação
POST /user

#Atualização
PUT /user/:id
```

Post
```
#Listagem
GET /post

#Criação
POST /post

#Atualização
PUT /post/:id
```

View
```
#Listagem
PATCH /post/view/

#Criação
POST /post/view

```

Like
```
#Listagem
PATCH /post/like/

#Criação
POST /post/like

```