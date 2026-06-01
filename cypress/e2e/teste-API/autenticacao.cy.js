/// <reference types="cypress" />

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4MDMzOTE5NCwiZXhwIjoxNzgwMzY3OTk0fQ.fBDov-50LN2bUI9wQBO9iO7FY6HQeyEtTYY0nPkmQos";

describe('Validação de Usuários já definidos', () => {
    it('Deve validar usuário padrão com sucesso', () => {
        cy.api({
            method: "POST",
            url: 'api/login',
            body: {
                  "email": "usuario@teste.com",
                  "password": "user123"
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    });

    it('Deve validar usuário administrador com sucesso', () => {
        cy.api({
            method: "POST",
            url: 'api/login',
            body: {
                  "email": "admin@biblioteca.com",
                  "password": "admin123"
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    });

     it('Deve ocorrer erro de credenciais - credenciais inválidas', () => {
        cy.api({
            method: "POST",
            url: 'api/login',
            body: {
                  "email": "inexistente@email.com",
                  "password": "user123"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.equal(401),
            expect(response.body.error).to.equal("INVALID_CREDENTIALS")
        })
    });
});