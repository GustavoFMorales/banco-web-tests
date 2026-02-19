describe('Transferência', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login();

    });
    it('Deve transferir quando informo dados e valor válidos', () => {
        /*
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem'); // o parent() pega o elemento pai do label, que é o select, e o as() dá um apelido para esse elemento.
        cy.get('@campo-conta-origem').click(); // clicando no select para abrir as opções
        cy.get('@campo-conta-origem').contains('gustavo com saldo de R$ 15000.00 (Ativa)').click(); // clicando na opção do select que tem o texto 'gustavo com saldo de R$ 15000.00 (Ativa)'

        // conta destino
        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino');
        cy.get('@campo-conta-destino').click();
        cy.get('@campo-conta-destino').contains('paola com saldo de R$ 23000.00 (Ativa)').click(); */


        cy.AdicionaConta('label[for="conta-origem"]', 'campo-conta-origem', 'paola');
        cy.AdicionaConta('label[for="conta-destino"]', 'campo-conta-destino', 'gustavo'); 
        cy.get('#valor').click().type('500');
        cy.get('button').contains('Transferir').click();
        //cy.get('.toast').should('have.text', 'Transferência realizada!'); // Verifica se a mensagem de sucesso está visível na tela
        cy.verificarMensagemToast('Transferência realizada!');


    });
});