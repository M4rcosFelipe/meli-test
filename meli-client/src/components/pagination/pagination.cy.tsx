import React from "react";
import Pagination from "./pagination";

describe("<Pagination />", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    const data = {
      currentPage: 3,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);
  });

  it("Deve ir para a página ao clicar no botão com o número da página", () => {
    const data = {
      currentPage: 1,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-page-number='2']").click({ force: true });
    cy.get("@goToPage").should("have.been.calledWith", 2);
  });

  it("Deve ir para a próxima página ao clicar no botão 'seguinte'", () => {
    const data = {
      currentPage: 1,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='go-to-next-page-button']").click({
      force: true,
    });
    cy.get("@goToNextPage").should("have.been.called");
  });

  it("Deve ir para a página anterior ao clicar no botão 'anterior'", () => {
    const data = {
      currentPage: 10,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='go-to-previous-page-button']").click({
      force: true,
    });
    cy.get("@goToPreviousPage").should("have.been.called");
  });

  it("Deve não mostrar o botão 'anterior' caso esteja na primeira página", () => {
    const data = {
      currentPage: 1,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='go-to-previous-page-button']").should("not.exist");
  });

  it("Deve não mostrar o botão 'seguinte' caso esteja na última página", () => {
    const data = {
      currentPage: 10,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='go-to-next-page-button']").should("not.exist");
  });

  it("Deve mostrar apenas 10 botões quando o total de páginas for maior que 10", () => {
    const data = {
      currentPage: 15,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 20,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='page-number-button']").should("have.length", 10);
  });

  it("Deve mostrar apenas 2 botões quando o total de páginas for maior que 10 na versão mobile", () => {
    cy.viewport(500, 500);

    const data = {
      currentPage: 3,
      goToPage: cy.spy().as("goToPage"),
      goToNextPage: cy.spy().as("goToNextPage"),
      goToPreviousPage: cy.spy().as("goToPreviousPage"),
      totalPages: 10,
    };

    cy.mount(<Pagination {...data} />);

    cy.get("[data-testid='page-number-button']").should("have.length", 2);
  });
});
