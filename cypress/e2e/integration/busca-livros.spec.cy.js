/// <reference types="cypress" />

describe('Funcionalidade: Busca de Livros', () => {
    
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve encontrar livro pela barra de pesquisa', () => {
        
        cy.get('#search-input').type('A Metamorfose')
        cy.get('#filter-description').should('contain', 'Busca:')
        cy.get('.card-title > .text-dark').first().click()
    });

    it('Deve abrir pagina de detalhes e adicionar à Cesta', () => {
        cy.get('.card-title > .text-dark').eq(5).click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar no botão Adicionar à Cesta', () => {
        cy.get('.btn-primary').eq(5).click()
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve Adicionar 2 livros na cesta', () => {
        cy.get('.btn-primary').eq(5).click()
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
        cy.get('.card-title > .text-dark').eq(4).click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')

        cy.get('#cart-count').should('contain', 2)
        cy.get('.btn-outline-secondary').click()
    });

    it('Deve adicionar 3 livros na cesta de forma automatizada', () => {
        cy.get('.btn-primary').then((livros) => {
            const total = livros.length
            const index = []

            while(index.length < 3) {
                const random = Math.floor(Math.random() * total)
                if(!index.includes(random)) {
                    index.push(random)
                }
            }

            index.forEach((i) => {
                cy.wrap(livros[i]).click()
            })
        })

        cy.get('#cart-count').should('contain', 3)
    })

});