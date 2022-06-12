/// <reference types="cypress"/>


describe('Suite de testes de Nossos Especialistas', () =>{
    const email = 'qa-automation@zenklub.com';
    const senha = 'qachallenge';
    const texto = 'Terapia cognitivo comportamental';

    context('@Quero saber mais', () => {
        it('Clicar em Quero saber mais', () =>{
            cy.login(email, senha)
            cy.realizarBusca(texto);
            cy.get(':nth-child(1) > app-professional-search > .container > .row > .professional-link > .btn').click();
            cy.get('.timezone-title').should('contain', 'Escolha um horário');
        })

        it.only('Layout Quero saber mais', () =>{
            cy.login(email, senha);
            cy.realizarBusca(texto);
            cy.get(':nth-child(1) > app-professional-search > .container > .row > .col-lg-7 > .fake-link > app-professional-avatar > .avatar-container > .user_info > h2')
              .invoke('text').then(($nomeDoProfissional) => {
                cy.log($nomeDoProfissional)
              });
            cy.get(':nth-child(1) > app-professional-search > .container > .row > .professional-link > .btn').click();
            cy.get('.user_info h2').invoke('text').then(($valueAtual) => { 
                cy.log($valueAtual);
                expect($valueAtual).to.eq(nomeDoProfissional);
              })
        })
    })
 })