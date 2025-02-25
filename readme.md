![Logo](https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.111/mercadolibre/logo_large_25years_v2.png)

# Teste Prático - Frontend

O projeto está dividido em 2 aplicações:

- /meli-client = frontend
- /meli-server = backend

## Rodando o projeto

1. Clone o projeto

```bash
git clone https://github.com/M4rcosFelipe/meli-test
```

2. Entre na pasta `meli-test`

```bash
cd meli-test
```

### Rodando o backend

Dentro de `meli-test/meli-server`:

```bash
cp .env.example .env
npm install
npm run dev
```

O servidor inicializará na url http://localhost:3001

### Rodando o front end

Em outra janela do terminal e dentro de `meli-test/meli-client`:

```bash
cp .env.example .env
npm install
npm run dev
```

O servidor inicializará na url http://localhost:3000/

## Funcionalidades

O projeto possui as funcionalidades mínimas e extras descritas no teste.

- As telas são navegáveis de forma independente e possuem suas próprias URLs:

  - Caixa de busca em: `http://localhost:3000/`
  - Resultados da busca em `http://localhost:3000/items?search=`
  - Detalhe do produto em: `http://localhost:3000/items/:id`

- Endpoint de busca em `http://localhost:3001/api/items?offset=:offset&q=:query`
- Endpoint de consulta de item em `http://localhost:3001/api/items/:id`

- Na tela de caixa de busca, o usuário pode inserir o nome do produto que deseja procurar. Ao
  enviar o formulário, ele é redirecionado para a tela de "Resultados da busca". Em seguida, ao
  clicar em um dos resultados, ele é levado para a tela de "Detalhe do produto".

- Dado um id de produto, é possível acessar diretamente a tela de "Detalhe do produto".

- Os resultados da busca são paginados em grupos de 10 itens.

- Uma mensagem de boas vindas ao usuário é exibida na primeira vez que ele acessa o fluxo de
  busca.A mensagem aparece apenas na primeira visita,essa informação é armazenada no `LocalStorage` do navegador.

## Como rodar os testes do frontend

Dentro de `meli-test/meli-client`

Testes e2e:

```bash
npm run cy:e2e
```

Testes de componentes:

```bash
npm run cy:comp
```

Abrir o client do Cypress:

```bash
npm run cy:open
```

## Stack utilizada

**Front-end:** Nextjs, React, Zustand, Sass

**Back-end:** Node, Express
