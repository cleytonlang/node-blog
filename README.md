## Description

<p align="center">API criada com <a href="http://nodejs.org" target="_blank">Node.js</a> e Typescript usando o framework <a href="https://expressjs.com/" target="_blank">Express</a>. Foi implementado usando o ORM <a href="http://nodejs.org" target="_blank">Prisma</a>, por tanto pode ser utilizado qualquer banco de dados, como default eu deixei o SQLite pra facilitar e agilizar o teste.</p>

## Instalação

```bash
$ npm install
```
## Variáveis de ambiente
Antes de startar o projeto é necessário criar o .env para as variáveis de ambiente, coloqueo o conteúdo abaixo dentro do arquivo .env
```bash
DATABASE_URL="file:./dev.db"
PORT=3001
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