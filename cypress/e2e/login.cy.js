describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Login com dados váldos devem permitir entrada no sistema', () => {
    cy.login();
  });

  it('Login com senha inválida deve exibir mensagem de erro', () => {

    cy.loginInvalido();
    
    //cy.get('.toast').should('be.visible').and('contain.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    // contain.text veirfica se tem uma parte do texto ou uma mensagem toda.

  })
});