/// <reference types="cypress" />

beforeEach('Open application',() => {
    cy.visit('/')
})

it.only('input fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.get('#inputEmail1').type('hello@test.com', {delay:200}).clear().type('hello')
    cy.contains('nb-card', 'Using the Grid').contains('Email').type('Yes It works')
})