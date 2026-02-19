Cypress.Commands.add("AdicionaConta",(elementoHTML, apelido, dadoClique) => {
    cy.get(elementoHTML).parent().as(apelido);
    cy.get(`@${apelido}`).click();
    cy.get(`@${apelido}`).contains(dadoClique, { matchCase: false }).click(); // O matchCase: false é para ignorar a diferença entre maiúsculas e minúsculas na hora de procurar o texto. Assim, ele vai encontrar o texto mesmo que esteja em maiúsculas ou minúsculas.
});