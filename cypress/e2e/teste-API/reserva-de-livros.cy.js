/// <reference types="cypress" />

let token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4MDQ0MTU0NCwiZXhwIjoxNzgwNDcwMzQ0fQ.kHwO1DYMquDAiC54CCywHiPHyumfuxw81sBuIxY2Z50";

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