describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Login com dados váldos devem permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais=> {
       cy.get('#username').click().type(credenciais.valida.usuario);
       cy.get('#senha').click().type(credenciais.valida.senha);
    })
    cy.get('#login-section > .btn').click();

    // Tem uma função chamada contains que verifica se o texto está visivel na tela 
    cy.wait(1000); // Espera 1 segundo para garantir que a página carregou
    cy.contains('h4', 'Realizar Transferência').should('be.visible'); 
    
    // Temos dois parametros, o primeiro é o elemento html que verifica se há um texto h4 na tela, o segundo é o texto que queremos verificar. o .should('be.visible') verifica se o elemento está visivel na tela
  });

  it('Login com senha inválida deve exibir mensagem de erro', () => {

    cy.fixture('credenciais').then(credenciais => {
       cy.get('#username').click().type(credenciais.invalida.usuario);
       cy.get('#senha').click().type(credenciais.invalida.senha);
    })
   
    //cy.get('#login-section > .btn').click();
    cy.contains('button', 'Entrar').click(); // Outra forma de clicar no botão, procurando pelo texto do botão
    // Essa forma de clique em botão é a mais recomendada, pois ele descreve qual botão estamos clicando
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    
    //cy.get('.toast').should('be.visible').and('contain.text', 'Erro no login. Tente novamente.'); // Verifica se a mensagem de erro está visível na tela
    // contain.text veirfica se tem uma parte do texto ou uma mensagem toda.

  })
});