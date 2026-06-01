/// <reference types="cypress" />

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4MDMzOTE5NCwiZXhwIjoxNzgwMzY3OTk0fQ.fBDov-50LN2bUI9wQBO9iO7FY6HQeyEtTYY0nPkmQos";

describe('Catálogo de livros', () => {
    it('Deve listar todos os livros disponíveis com sucesso', () => {
        cy.api({
            method: 'GET',
            url: 'api/books',
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    });

    it('Deve listar todos os livros disponíveis na categoria Ficção', () => {
        cy.api({
            method: 'GET',
            url: 'api/books',
            category: 'Ficção',
            avaliable: 'true',
            orderBy: 'title',
            order: "ASC"
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    });

     it('Deve listar todas as categorias disponíveis com sucesso', () => {
        cy.api({
            method: 'GET',
            url: 'api/books/categories',
        }).should((response) => {
            expect(response.status).to.equal(200)
        })
    });

});