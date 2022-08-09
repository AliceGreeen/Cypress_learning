/// <reference types="Cypress" /> 

it('', () => 
{
cy.visit('https://vk.com/')
cy.contains('Войти')
})

it.only('', () => 
{
cy.visit('https://docs.cypress.io/api/table-of-contents')
cy.get('footer').contains('Discussions')
})