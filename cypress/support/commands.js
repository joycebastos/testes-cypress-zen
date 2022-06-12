/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
beforeEach(() => {
    cy.visit(url);
    cy.get('body').then(($body) => {
      if ($body.find('#search').length) {
        cy.get('#nav-toggle').click();
        cy.get(':nth-child(9) > .app-header-mobile-menu-link').click();
        cy.get('.text-block').should('be.visible')
        cy.visit(url);
    };
  });
})

Cypress.Commands.add('login', (email, senha) => {
    cy.get('#login-form-email').type(email);
    cy.get('#login-form-password').type(senha);
    cy.get('.zk-max-w-sm > .zk-space-y-6 .zk-button').click();
})

Cypress.Commands.add('realizarBusca', (texto) => {
    cy.get('#nav-toggle').click();
    cy.get(':nth-child(2) > .app-header-mobile-menu-link').click();
    cy.get('#search')
        .should('be.visible')
        .type(texto);
})