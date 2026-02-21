// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
 import {faker} from '@faker-js/faker'

Cypress.Commands.add('register', () => {
    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: 'international' }),
        password: faker.internet.password(),
    }
    const confirmPassword = user.password

        cy.get('#name').type(user.name)
        cy.get('#email').type(user.email)
        cy.get('#phone').type(user.phone)
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
        cy.get('.user-info').should('contain', user.name)

    return cy.wrap(user)
})

Cypress.Commands.add('randomBooks', (qtn = 1) => {
    cy.get('.btn-primary').then((books) => {
        const total = books.length
        const index = []

        while(index.length < qtn) {
            const random = Math.floor(Math.random() * total)
            if(!index.includes(random)) index.push(random)
        }

        index.forEach((i) => {
            cy.wrap(books[i]).click()
            cy.wait(2000)
        })
    })
})

Cypress.Commands.add('randomBookDetails', (qnt = 1) => {
    cy.get('.card > .card-body > .mt-auto > .d-grid > .btn-outline-info').then((details) => {
        const total = details.length
        const indices = []

        while(indices.length < qnt) {
            const randomDetails = Math.floor(Math.random() * total)
            if(!indices.includes(randomDetails)) indices.push(randomDetails) 
        }

        indices.forEach((i) => {
            cy.wrap(details[i]).click()
            cy.wait(2000)

        })
    })
})


Cypress.Commands.add('removeRandomBook', (qtn = 1) => {
    cy.get('.card-body > .row').then((itens) => {
        const total = itens.length
        const indice = []

        while(indice.length < qtn) {
            const randomRemove = Math.floor(Math.random() * total)
            if(!indice.includes(randomRemove)) indice.push(randomRemove)
        }
        indice.sort((a, b) => b - a)
        indice.forEach((i) => {
            cy.wrap(itens[i]).find(':nth-child(1) > .btn-outline-danger').click()
            cy.wait(2000)
        })
    })
})