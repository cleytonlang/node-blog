## Description

<p align="center">API criaca com <a href="http://nodejs.org" target="_blank">Node.js</a> e Typescript usando o framework<a href="https://expressjs.com/" target="_blank">Express</a>. Foi implementado usando o ORM <a href="http://nodejs.org" target="_blank">Prisma</a>, por tanto pode ser qualquer banco de dados, como default eu deixei o SQLite pra facilitar e agilizar o teste.</p>

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
#antenticar
POST /authenticate
```

Usuário
```
#Listagem
GET /user/

#Criação
POST /user/

#Atualização
PUT /user/:id
```