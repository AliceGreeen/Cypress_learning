/// <reference types="Cypress" /> 

it("SHOULD", () =>
{
cy.visit('https://dev-wms.okolo.app/auth')
cy.get('[data-cy="auth-phone-input__input"]')
    .type(9199142982)
    .should('have.value', '+7 (919) 914-29-82')
    .and('be.visible')
})

it("EXPECT", () =>
{
cy.visit('https://dev-wms.okolo.app/auth')
cy.get('[data-cy="auth-phone-input__input"]')
    .type(9199142982).then (input => 
        {
            expect(input).to.have.value('+7 (919) 914-29-82')
        })
})

it.only("EXPECT", () =>
{
cy.visit('https://dev-wms.okolo.app/auth')
cy.get('[data-cy="auth-phone-input__input"]')
    .type(9199142982).then (input => 
        {
            expect(input).to.have.value('+7 (919) 914-29-82')
        })
})