/// <reference types="cypress" />
    import {faker} from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    let name = faker.person.fullName()
    let email = faker.internet.email()
    let phone = faker.phone.number({ style: 'international' })
    let password = faker.internet.password()
    let confirmPassword = password

    it('Deve criar cadastro com sucesso utilizando Faker', () => {
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
        cy.get('.user-info').should('contain', name)
    });

    it('Deve mostrar Erro de Usuario já Cadastrado', () => {
        cy.get('#name').type('Liana Teste')
        cy.get('#email').type('liana.teste@qa.com')
        cy.get('#password').type('algo+123')
        cy.get('#confirm-password').type('algo+123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('#alert-container').should('contain', 'Erro ao criar conta')
    });

    /* TESTE DE COMPONENTES */

    it('Deve mostrar Erro no campo Nome', () => {
        cy.get('#name').type('A')
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

    it('Deve mostrar Erro no campo Email', () => {
        cy.get('#name').type(name)
        cy.get('#email').type('algo.email')
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Email válido é obrigatório')
    });

    // Teste invalido não há nenhuma mensagem de erro quando inserido um numero telefonico invalido 
    /* it('Deve mostrar Erro no campo Telefone', () => {
        cy.get('#name').type('Liana')
        cy.get('#email').type('algo.teste@qa.com')
        cy.get('#phone').type('121234567')
        cy.get('#password').type('algo+123')
        cy.get('#confirm-password').type('algo+123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Email válido é obrigatório')
    });*/

    it('Deve mostrar Erro no campo Senha', () => {
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('#password-feedback').should('contain', 'Mínimo 6 caracteres')
    });

    it('Deve mostrar Erro no campo Confirmar Senha', () => {
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(password)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Senhas não coincidem')
    });

    it.only('Deve mostrar Erro no campo Confirmar Senha', () => {
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Senhas não coincidem')
    });

});

