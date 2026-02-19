Cypress.Commands.add('verificarMensagemToast', (mensagemEsperada) => {
    cy.get('.toast').should('have.text', mensagemEsperada); // Verifica se a mensagem de sucesso está visível na tela
});