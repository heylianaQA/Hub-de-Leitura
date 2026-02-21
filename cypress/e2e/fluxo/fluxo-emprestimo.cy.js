/// <reference types="cypress" />

import {faker} from '@faker-js/faker'

context('End-to-end - Usando JS', () => {
    
    it('Deve fazer todo um fluxo de emprestimo de apenas um livro', () => {
        cy.visit('index.html')
        cy.get('#account-link').click()
        cy.get('[href="/register.html"]').click()
        cy.register()
        cy.get('#update-account-button').click()
        let birthday = faker.date.birthdate().toISOString().split('T')[0]
        cy.get('#birthdate').type(birthday)
        cy.get('#save-btn').click()
        cy.get('#alert-container').should('contain', 'Perfil atualizado com sucesso!')
        cy.get('.btn-outline-info').click()
        cy.get('.d-grid > .btn-primary').click()
        cy.randomBookDetails(1)
        cy.get('.btn-outline-secondary').click()
        cy.randomBookDetails(1)
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
        cy.get('.btn-outline-secondary').click()
        cy.randomBooks(1)
        cy.get('#cart-count').should('contain', 2)
        cy.get('#cart-count').click()
        cy.removeRandomBook(1)
        cy.get('#checkout-btn').click()
        cy.fixture('user').then((user) => {
            cy.get('#user-phone').type(user.phone)
        })
        cy.get('#terms-agreement').click()
        cy.get('#confirm-reservations-btn').click()
        cy.get('.confirmation-card').should('exist')
        
    });

});