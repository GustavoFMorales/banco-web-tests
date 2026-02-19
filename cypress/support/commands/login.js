
Cypress.Commands.add("login", (username, password) => {
    cy.fixture('credenciais').then(credenciais => {
         cy.get('#username')
            .click()
            .type(credenciais.valida.usuario);
         cy.get('#senha')
            .click()
            .type(credenciais.valida.senha);
    });
    cy.get('#login-section > .btn')
        .click();
    cy.get(':nth-child(1) > .col > h4')
        .should('be.visible');
});

Cypress.Commands.add('loginInvalido', (username, password) => {
      cy.fixture('credenciais').then(credenciais => {
       cy.get('#username').click().type(credenciais.invalida.usuario);
       cy.get('#senha').click().type(credenciais.invalida.senha);
    })
   
    //cy.get('#login-section > .btn').click();
    cy.contains('button', 'Entrar').click(); // Outra forma de clicar no botão, procurando pelo texto do botão
    // Essa forma de clique em botão é a mais recomendada, pois ele descreve qual botão estamos clicando
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    
})
