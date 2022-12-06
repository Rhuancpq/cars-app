# CARS App

## Como Executar

### Pré-requisitos

- Docker
- Docker Compose

### Execução

Primeiro é necessário construir as imagens do Docker:

```bash
docker-compose build
```

Depois é necessário subir o container com o banco de dados, e depois subir os demais (2, frontend e backend)containers:

```bash
docker-compose up -d db
docker-compose up
```

## Como Testar

Acesse a aplicação em `http://localhost:3000`

E caso queira testar a API, acesse `http://localhost:8000/app/cars`

## Populando o Banco de Dados

- Vai ser necessário rodar o script `seed.py` que está dentro do container da API:

```bash
docker-compose exec web python3 seed.py
```

**É importante que o container da API esteja rodando**
**E importante também para possuir um usuário de acesso**

Usuário: `admin`
Senha: `admin123`

### Observações

- O banco de dados é um PostgreSQL
- Os tokens JWT são salvos nos cookies: `access_token` e `refresh_token`
- O frontend está em ReactJS
- As imagens dos carros são salvas em formato base64 no banco de dados
- O backend está em Python com Django e Django Rest Framework
