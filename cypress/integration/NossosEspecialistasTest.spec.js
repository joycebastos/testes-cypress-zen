/// <reference types="cypress"/>

describe('Suite de testes de Nossos Especialistas', () =>{

  const email = 'qa-automation@zenklub.com';
  const senha = 'qachallenge';

   context('@Nossos Especialistas', () => {
       it('Validar tela de Nossos Especialistas', () =>{
        cy.login(email, senha);
        cy.get('#nav-toggle').click();
        cy.get(':nth-child(2) > .app-header-mobile-menu-link').click();
        cy.get('#search').should('be.visible')
        cy.get('h1.search-professional-header').should('contain', 'Encontre seu especialista');
        cy.get('h2.search-professional-subtitle').should('contain', 'Converse com um profissional sem sair de casa')
        
       
       
       })

       it('Realizar busca válida com o termo Terapia cognitiva comportamental', () =>{
            cy.login(email, senha)
            cy.get('#nav-toggle').click();
            cy.get(':nth-child(2) > .app-header-mobile-menu-link').click();
            cy.get('#search')
              .should('be.visible')
              .type('Terapia cognitivo comportamental');
            cy.get('.input-group-append .btn').click();
       })
    })
})