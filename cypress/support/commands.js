Cypress.Commands.add("login", (username, password) => {
    cy.visit('/');
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

Cypress.Commands.add("AdicionaConta",(elementoHTML, apelido, dadoClique) => {
    cy.get(elementoHTML).parent().as(apelido);
    cy.get(`@${apelido}`).click();
    cy.get(`@${apelido}`).contains(dadoClique, { matchCase: false }).click(); // O matchCase: false é para ignorar a diferença entre maiúsculas e minúsculas na hora de procurar o texto. Assim, ele vai encontrar o texto mesmo que esteja em maiúsculas ou minúsculas.
});