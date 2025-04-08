
# Gerenciamento de Usuários

Este é um projeto de API REST para gerenciamento de usuários, desenvolvido com Node.js, Express, Prisma e PostgreSQL. Ele permite criar, atualizar, deletar, listar e fazer login de usuários com autenticação JWT e criptografia de senhas usando bcrypt.

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL (banco de dados)
- Bcrypt (para hash de senhas)
- JSON Web Token (JWT)
- dotenv

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
Crie um arquivo `.env` com o seguinte conteúdo:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco?schema=public"
JWT_SECRET=sua_chave_secreta_aqui
```

4. Rode as migrations:
```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor:
```bash
npm start
```

## 📚 Rotas da API

### Criar usuário
```
POST /users
Body: { "email": "exemplo@email.com", "senha": "123456" }
```

### Atualizar usuário
```
PUT /users/:id
Body: { "email": "novo@email.com", "senha": "nova_senha" }
```

### Deletar usuário
```
DELETE /users/:id
Body: { "email": "email", "senha": "senha" }
```

### Listar usuários
```
GET /users
```

### Login de usuário
```
POST /login
Body: { "email": "email", "senha": "senha" }
```

## ✅ Funcionalidades

- [x] Cadastro de usuário com senha criptografada
- [x] Login com verificação de senha via bcrypt
- [x] Geração de token JWT
- [x] Atualização e exclusão de usuários
- [x] Organização por camadas: controller, rotas, index

## 📄 Licença

Este projeto é livre para fins de aprendizado e uso pessoal.

