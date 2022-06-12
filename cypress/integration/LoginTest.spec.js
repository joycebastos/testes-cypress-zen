/// <reference types="cypress" />

describe('Síte de testes de Login', ()=>{
  const email = 'qa-automation@zenklub.com';
  const senha = 'qachallenge';
  
  context('@Login', () => {

    it('Login com sucesso', ()=> {
      cy.login(email, senha)
      cy.get('.action-button').should('contain', 'Agendar Sessão');
    });

    it('Não fazer login com senha invalida', ()=> {
      cy.login(email, 'qachange')
      cy.get('.alert-responsive .alert-danger').should('contain', 'O e-mail e a senha fornecidos não correspondem');
    });
  });
})