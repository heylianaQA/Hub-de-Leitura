/// <reference types="cypress" />
    import {faker} from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: 'international' }),
        password: faker.internet.password(),
    }

    const confirmPassword = user.password

    it('Deve criar cadastro com sucesso', () => {
        cy.writeFile('cypress/fixtures/user.json', user)

        cy.get('#name').type(user.name)
        cy.get('#email').type(user.email)
        cy.get('#phone').type(user.phone)
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
        cy.get('.user-info').should('contain', user.name)
    });

    it('Deve mostrar Erro de Usuario já Cadastrado', () => {
        cy.fixture('user').then((user) => {
        cy.get('#name').type(user.name)
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('#alert-container').should('contain', 'Erro ao criar conta')
        })
    });


    it('Deve mostrar Erro no campo Nome', () => {
        cy.fixture('user').then((user) => {
        cy.get('#name').type('A')
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
        })
    });

    it('Deve mostrar Erro no campo Email', () => {
        cy.fixture('user').then((user) => {
        cy.get('#name').type(user.name)
        cy.get('#email').type('algo.email')
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Email válido é obrigatório')
        })
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
        cy.fixture('user').then((user) => {
        cy.get('#name').type(user.name)
        cy.get('#email').type(user.email)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('#password-feedback').should('contain', 'Mínimo 6 caracteres')
        })
    });

    it('Deve mostrar Erro no campo Confirmar Senha', () => {
        cy.fixture('user').then((user) => {
        cy.get('#name').type(user.name)
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#confirm-password').type(user.password)
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        
        cy.get('.invalid-feedback').should('contain', 'Senhas não coincidem')
        })
    });

});

