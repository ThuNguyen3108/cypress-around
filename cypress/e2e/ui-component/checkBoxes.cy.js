/// <reference types="cypress" />

beforeEach('Open application',() => {
    cy.visit('/')
})

it.only('check box', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
    cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
    cy.get('[type="checkbox"]').uncheck({force:true}, {multiple:true}).should('not.be.checked')
})