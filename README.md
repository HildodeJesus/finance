
# Finance API

This Api saves users' expenses and earnings, who can also view them. This api must be consumed by some frontend application, where the user can insert and view the data.
## Tech Stack

**Client:** *Nothing*

**Server:** Node, Express, MariaDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/HildodeJesus/finance.git
```

Go to the project directory

```bash
  cd finance
```

Install dependencies

```bash
  npm install
```

Start the server in development mode

```bash
  npm run dev
```

Start the server in production mode

```bash
  npm run start
```
## API Reference

### Create a new user

Create your user through that endpoint. The email and password you use here, will be used to obtain the token later

```http
  POST /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. It must contain 1 characters at leasts |
| `email` | `string` | **Required**. It must be a valid email|
| `password` | `string` | **Required**. It must contain 6 characters at leasts |

#### Response: (200 OK)
```http 
{
    "msg": "Usuário criado com sucesso"
}
```

#### Response: (400 BAD REQUEST)
```http 
{
    "errors": [
        "O email é inválido"
    ]
}
```

### Get all users

Get all users created

```http
  GET /api/users/
```

#### Response (200 OK):

```code 
{
    "users": [
        {
            "id": "272bd6a4-3b13-4ef3-8420-f7a716954d52",
            "name": "Lea Oliveira",
            "email": "leaoliveirasilva5@gmail.com"
        },
        {
            "id": "60b145a1-0506-4c9b-8a90-fbf14916b0cc",
            "name": "Hildondon",
            "email": "hildo@gmail.com"
        },
        {
            "id": "b6dd8f3f-6709-4b4c-957c-14e69a488e8c",
            "name": "Leticia",
            "email": "lety@gmail.com"
        }
    ]
} 
```

### Delete User

To make the api safer, therefore, a user's deletion can only be done by the user himself. It must have a token JWT

```http
  DELETE /api/users/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `authorizathion` | `header` | **Required**. Token JWT |

#### Response: (200 OK)

```code 
{
    "msg": "Deletado com sucesso"
}
```

#### Response: (400 OK)

```code 
{
    "msg": "Usuário não existe!"
}
```
