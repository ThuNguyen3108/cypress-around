/// <reference types="cypress" />

beforeEach('Open application',() => {
    cy.visit('/')
})

it.only('tooltips', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()
    cy.contains('button', 'Top').trigger('mouseover')
    cy.get('nb-tooltip').should('contain', 'This is tooltip on top')
})