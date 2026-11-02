# PROJETO-API
# API de Agendamento de Serviços

## Integrantes
- Natyelle Teixeira da Cruz
- Mayara Capua
- Sthefany Alves

## Descrição
Este projeto foi desenvolvido para a disciplina de Programação e Tecnologias para Aplicações Servidor do IFMS.
A aplicação consiste em uma API REST para gerenciamento de agendamentos de serviços. O projeto foi organizado utilizando o padrão MVC (Model-View-Controller), separando as responsabilidades entre rotas, controllers, services, models e middlewares.

## Tecnologias utilizadas
- Node.js
- Express.js
- JavaScript
- MVC

## Como executar o projeto
1. Clone o repositório.

2. Instale as dependências:

npm install

3. Execute o projeto:

npm start

O servidor será iniciado em:

http://localhost:3000

## Estrutura do projeto
Projeto-API
 server.js
 app.js
 controllers
 middlewares
 models
 routes
 services
 package.json
 README.md

## Entidades
A API possui quatro entidades:

- Clientes
- Profissionais
- Serviços
- Agendamentos

### Clientes
- GET /clientes
- GET /clientes/:id
- POST /clientes
- PUT /clientes/:id
- DELETE /clientes/:id

### Profissionais
- GET /profissionais
- GET /profissionais/:id
- POST /profissionais
- PUT /profissionais/:id
- DELETE /profissionais/:id

### Serviços
- GET /servicos
- GET /servicos/:id
- POST /servicos
- PUT /servicos/:id
- DELETE /servicos/:id

### Agendamentos
- GET /agendamentos
- GET /agendamentos/:id
- GET /agendamentos/horarios/:profissionalId
- POST /agendamentos
- PUT /agendamentos/:id
- DELETE /agendamentos/:id

## Regras de negócio
A API possui as seguintes regras de negócio:

- Não permite cadastrar dois agendamentos para o mesmo profissional no mesmo horário.
- O cancelamento de um agendamento só pode ser realizado com antecedência mínima de 24 horas.
- Todos os dados obrigatórios do agendamento são validados antes do cadastro ou atualização.
- As rotas de criação, atualização e exclusão utilizam middlewares para autenticação, validação e registro de logs.

## Organização MVC
O projeto foi organizado seguindo o padrão MVC:

- Models: armazenam os dados da aplicação.
- Routes: definem as rotas da API.
- Controllers: recebem as requisições e retornam as respostas.
- Services: implementam as regras de negócio.
- Middlewares: realizam autenticação, validação e registro de logs.
