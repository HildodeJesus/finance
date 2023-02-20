# Finance API

Essa Api salva os gastos e ganhos dos usuários, que também podem visualizá-las.
Essa api deve ser consumida por alguma aplicação frontend, onde o usuário poderá
inserir e visualizar os dados.

## Installation

_Before started API, set up the environments variables. You can use .env_sample
file to do that_

To running Api locally, execute the following commands

```bash
  git clone https://github.com/HildodeJesus/finance.git
  cd finance
  npm install
  npm run dev
```

I believe you have Node.js and MySQL/MariaDB in the your machine

## API Reference

#### Create a new user

```http
  POST /api/users
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

#### Delete a user

```http
  DELETE /api/users
```

| Parameter | Type | Description |
| :-------- | :--- | :---------- |

_Only user can delete himself, once it is loggin._
