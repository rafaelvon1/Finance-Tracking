# Gerenciamento-Fianceiro-Pessoal

# API Calazzans (Usuários, Despesas, Saldo e Parâmetros)

Esta API permite o gerenciamento de usuários, despesas, saldo e parâmetros gerais do sistema, com operações de criação, leitura, atualização e exclusão (CRUD).
As requisições utilizam JSON como formato padrão.

## 🔎 Endpoints
## DESPESAS


### 1. Listar todas as despesas

**Endpoint:**
```
GET localhost:8080/despesas
```
**Resposta (200 OK):**
```
[
  {
    "id": 1,
    "idUsuario": 3,
    "descricao": "Luz",
    "valor": 150.00,
    "data": "2025-01-10",
    "categoria": "Casa"
  }
]
```
### 2. Criar uma nova despesa

**Endpoint:**
```
POST localhost:8080/despesas/add

```
**Corpo JSON:**
```
{
  "idUsuario": 3,
  "descricao": "Mercado",
  "valor": 200.50,
  "data": "2025-01-15",
  "categoria": "Alimentos"
}
```
### 3. Consultar despesa por ID

**Endpoint:**
```
GET localhost:8080/despesas/{id}
```

**Resposta:**
```
{
  "id": 1,
  "idUsuario": 3,
  "descricao": "Luz",
  "valor": 150.00,
  "data": "2025-01-10",
  "categoria": "Casa"
}
```
### 4. Atualizar uma despesa

**Endpoint:**
```
PUT localhost:8080/despesas/update
```

**Corpo JSON:**
```
{
  "id": 1,
  "idUsuario": 3,
  "descricao": "Luz (ajustado)",
  "valor": 170.00,
  "data": "2025-01-10",
  "categoria": "Casa"
}
```
### 5. Deletar despesa por ID

**Endpoint:**
```
DELETE localhost:8080/despesas/delete/{id}
```
### 6. Listar despesas por usuário

**Endpoint:**
```
GET localhost:8080/despesas/user?id_usuario=3
```
### 7. Atualizar meta de gastos do usuário

**Endpoint:**
```
PUT localhost:8080/despesas/meta?id_usuario=3&meta=500
```
## 📍 USUÁRIOS

### 1. Listar todos os usuários

**Endpoint:**
```
GET localhost:8080/usuarios
```
### 2. Criar um novo usuário

**Endpoint:**
```
POST localhost:8080/usuarios/add
```

**Corpo JSON:**
```
{
  "nome": "Kauan",
  "email": "kauan@gmail.com",
  "senha": "123456"
}
```
### 3. Buscar usuário por ID

**Endpoint:**
```
GET localhost:8080/usuarios/{id}
```
### 4. Atualizar usuário

**Endpoint:**
```
PUT localhost:8080/usuarios/update
```

**Corpo JSON:**
```
{
  "id": 3,
  "nome": "Kauan Atualizado",
  "email": "novoemail@gmail.com",
  "senha": "novaSenha"
}
```
### 5. Excluir usuário por ID

**Endpoint:**
```
DELETE localhost:8080/usuarios/delete/{id}
```
### 6. Buscar usuários pelo nome

**Endpoint:**
```
GET localhost:8080/usuarios/consulta_nome?nome=kauan
```
## 📍 SALDO
### 1. Listar todos os saldos

**Endpoint:**
```
GET localhost:8080/saldo
```
### 2. Criar um novo saldo

**Endpoint:**
```
POST localhost:8080/saldo/add
```

**Corpo JSON:**
```
{
  "idUsuario": 3,
  "valor": 2000.00,
  "data": "2025-01-05"
}
```
### 3. Consultar saldo por ID

**Endpoint:**
```
GET localhost:8080/saldo/{id}
```
### 4. Atualizar saldo

**Endpoint:**
```
PUT localhost:8080/saldo/update
```
### 5. Deletar saldo

**Endpoint:**
```
DELETE localhost:8080/saldo/delete/{id}
```
### 6. Listar saldo por usuário

**Endpoint:**
```
GET localhost:8080/saldo/user?id_usuario=3
```
## 📍 PARÂMETROS
### 1. Listar parâmetros do sistema
**Endpoint:**
```
GET localhost:8080/Parametros
```

**Resposta (exemplo):**
```
[
  {
    "id": 1,
    "chave": "tema",
    "valor": "dark"
  }
]
```