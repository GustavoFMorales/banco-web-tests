describe('Login', () => {
  it('Login com dados váldos devem permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000');
    cy.get('#username').click().type('gustavo');
    cy.get('#senha').click().type('123456');
    cy.get('#login-section > .btn').click();

    // Tem uma função chamada contains que verifica se o texto está visivel na tela 
    cy.contains('h4', 'Realizar Transferência').should('be.visible'); // Temos dois parametros, o primeiro é o elemento html que verifica se há um texto h4 na tela, o segundo é o texto que queremos verificar. o .should('be.visible') verifica se o elemento está visivel na tela
  })
})