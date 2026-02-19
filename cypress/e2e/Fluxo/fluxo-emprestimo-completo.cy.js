/// <reference types="cypress" />


context('End-to-end - Fluxo Rapido', () => {
    /*  Como cliente
        quero acessar o Hub de Livros
        escolher 3 livros
        adicionar a cesta
        retirar 1 livros da cesta
        confirmar emprestimo
    */

        it('Deve escolher e selecionar livros para Emprestimos', () => {
            cy.visit('login.html')
            cy.fixture('perfil').then((dados) => {
                cy.login(dados.email, dados.password)
            })
            cy.get('.user-info').should('exist')

            cy.get('#latest-reservation > .text-center > .btn').click()
            cy.randomBooks(3)

            cy.get('#cart-count').should('contain', 3)
            cy.get('#cart-count').click()

            cy.removeRandomBook(1)
            cy.get('#checkout-btn').click()
            cy.get('#terms-agreement').click()
            cy.get('#confirm-reservations-btn').click()

            cy.get('.confirmation-card').should('exist')
        })

});