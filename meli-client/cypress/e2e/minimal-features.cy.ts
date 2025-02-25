// - As telas são navegáveis de forma independente e possuem suas próprias URLs:

//   - Caixa de busca em: `http://localhost:3000/`
//   - Resultados da busca em `http://localhost:3000/items?search=`
//   - Detalhe do produto em: `http://localhost:3000/items/:id`

// - Na tela de caixa de busca, o usuário pode inserir o nome do produto que deseja procurar. Ao
//   enviar o formulário, ele é redirecionado para a tela de "Resultados da busca". Em seguida, ao
//   clicar em um dos resultados, ele é levado para a tela de "Detalhe do produto".

// - Dado um id de produto, é possível acessar diretamente a tela de "Detalhe do produto".

// - Os resultados da busca são paginados em grupos de 10 itens.

// - Uma mensagem de boas vindas ao usuário é exibida na primeira vez que ele acessa o fluxo de
//   busca.A mensagem aparece apenas na primeira visita,essa informação é armazenada no `LocalStorage` do navegador.

describe("Home page", () => {
  it("Mostra caixa de busca em http://localhost:3000/", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".search-box").should("be.visible");
  });

  it("Redireciona ao enviar o formulário", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".search-box__input").type("iphone");
    cy.get(".search-box").submit();
    cy.location("search").should("eq", "?search=iphone");
  });

  it("Mostra mensagem de boas vindas apenas no primeiro acesso ao fluxo de busca", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".first-time-message").should("be.visible");
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          "has-visited": "true",
        },
      });
    });

    cy.reload();
    cy.get(".first-time-message").should("not.exist");
  });
});

describe("Página de busca", () => {
  it("Mostra itens na página de busca", () => {
    cy.visit("http://localhost:3000/items?search=iphone");
    cy.get(".search-result").should("not.have.lengthOf.lessThan", 1);
  });

  it("Redireciona para a tela do produto ao clicar em algum resultado", () => {
    cy.visit("http://localhost:3000/items?search=iphone");
    cy.get(".search-result").first().click();
    cy.location("pathname").should("eq", "/items");
  });

  it("Os resultados da busca são paginados em grupos de 10 itens", () => {
    cy.visit("http://localhost:3000/items?search=iphone");
    cy.get(".search-result").should("have.length", 10);
  });
});

describe("Tela do produto", () => {
  it("Mostra detalhes do produto dado um id do produto", () => {
    cy.visit("http://localhost:3000/items/MLA1432080941");
    cy.get(".pdp-item-container").should("be.visible");
  });
});
