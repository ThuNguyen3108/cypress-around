/// <reference types="cypress" />

beforeEach('Open application',() => {
    cy.visit('/')
})

it.only('sliders', () => {
    cy.get('[tabtitle="Temperature"] circle')
        .invoke('attr', 'cx', '38.66')
        .invoke('attr', 'cy', '57.75')
        .click()
    cy.get('[class="value temperature h1"]').should('contain.text', '18')    
    
})