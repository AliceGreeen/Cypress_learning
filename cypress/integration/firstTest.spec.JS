// describe ('Какой-то блок проверок 1', () => {
//     context ('Это первая проверка', () => {
//         it('Ошибка при авторизации: Пользователь не может быть авторизован', () => {   
//         })
//     })
// })
/// <reference types="Cypress" /> 

// it('By ID', () =>
// {
//     cy.visit("http://vk.com/")
//     cy.get("index_email")
// })

// it('By Class', () =>
// {
//  cy.visit("https://dev-wms.okolo.app/auth")
//  cy.get("[class='basis-input__input basis-input__input--size_large'][placeholder='+7 (___) ___-__-__']")
// })

// it("By Tag", () =>
// {
//     cy.visit("https://docs.cypress.io/guides/references/legacy-configuration")
//     cy.get("nav")
// })

// it("By Different Types", () =>
// {
//     cy.visit("https://learn.cypress.io/")
//     cy.get("path[fill-rule='evenodd'][clip-rule='evenodd']")
// })

// it.only("By Contains name", () => 
// {
//     cy.visit("https://learn.cypress.io/")
//     cy.get("*[class^='text-gray-900']")
// })

// it.only("By Contains name", () => 
// {
//     cy.visit("https://learn.cypress.io/")
//     cy.get("*[class^='text-gray-900']")
// })

// it.only("By Contains name", () => 
// {
//     cy.visit("https://learn.cypress.io/")
//     cy.get("*[class^='text-gray-900']")
//     cy.get()
// })

it("Using Get with Find and eq", () =>
{
cy.visit('https://yandex.ru/pogoda/kostroma?utm_campaign=informer&utm_source=home&utm_content=main_informer&utm_medium=web&utm_term=title&lat=57.767961&lon=40.926858')
cy.get('*[class^="forecast-briefly__days swiper-container swiper-container-horizontal"]').find('ul').find('li').eq('4')
})

it.only("Using Get with Find and eq", () =>
{
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('*[class^="fixed w-sidebar top-16 bottom-0 right-0 pl-4 pr-8 pb-8 overflow-y-auto space-y-4 hide-scroll toc-content"]').find('ul').find('li').find('a').eq('0')
})