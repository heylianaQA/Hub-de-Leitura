/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve realizar login com sucesso com dados já pré-definidos', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()

        cy.get('.user-info').should('contain', 'Usuário Padrão')
    });

    it('Deve realizar login com sucesso usando dados criados', () => {
        cy.get('#email').type('liana.teste@qa.com')
        cy.get('#password').type('algo+123')
        cy.get('#login-btn').click()

        cy.get('.user-info').should('contain', 'Liana Teste')
    });

    it('Deve mostrar menssagem de Erro', () => {
        cy.get('#email').type('email.errado@teste.br')
        cy.get('#password').type('algo')
        cy.get('#login-btn').click()

        cy.get('#alert-container').should('contain', 'Email ou senha incorretos.')
    });

    it('Deve mostrar alerta para Email não informado', () => {
        cy.get('#password').type('algo')
        cy.get('#login-btn').click()

        cy.get('.invalid-feedback').should('contain', 'Por favor, insira um email válido.')
    });

    /* Não houve nenhuma mensagem de Alerta de senha não inserida
    it.only('Deve mostrar menssagem de Erro para Senha não informada', () => {
        cy.get('#email').type('liana.teste@qa.com')
        cy.get('#login-btn').click()

        cy.get('.invalid-feedback').should('contain', 'Por favor, insira uma senha válida.')
    });
        */

});