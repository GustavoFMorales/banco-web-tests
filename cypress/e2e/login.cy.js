describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  });
  it('Login com dados váldos devem permitir entrada no sistema', () => {
    cy.get('#username').click().type('gustavo');
    cy.get('#senha').click().type('123456');
    cy.get('#login-section > .btn').click();

    // Tem uma função chamada contains que verifica se o texto está visivel na tela 
    cy.contains('h4', 'Realizar Transferência').should('be.visible'); // Temos dois parametros, o primeiro é o elemento html que verifica se há um texto h4 na tela, o segundo é o texto que queremos verificar. o .should('be.visible') verifica se o elemento está visivel na tela
  });

  it('Login com senha inválida deve exibir mensagem de erro', () => {
    cy.get('#username').click().type('gustavo');
    cy.get('#senha').click().type('12345'); // senha inválida
    //cy.get('#login-section > .btn').click();
    cy.contains('button', 'Entrar').click(); // Outra forma de clicar no botão, procurando pelo texto do botão
    // Essa forma de clique em botão é a mais recomendada, pois ele descreve qual botão estamos clicando
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    
    //cy.get('.toast').should('be.visible').and('contain.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    // contain.text veirfica se tem uma parte do texto ou uma mensagem toda.

  })
});