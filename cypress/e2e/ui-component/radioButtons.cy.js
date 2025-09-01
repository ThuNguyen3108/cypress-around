/// <reference types="cypress" />

beforeEach('Open application',() => {
    cy.visit('/')
})

it.only('radio button', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(allRadioButtons  => {
        cy.wrap(allRadioButtons).eq(0).check({force:true}).should('be.checked')
        cy.wrap(allRadioButtons).eq(1).should('not.be.checked')
        cy.wrap(allRadioButtons).eq(2).should('be.disabled')
    })

    // cy.contains('nb-card', 'Using the Grid').contains('Option 1').find('[type="radio"]').check({force:true}).should('be.checked')
    cy.contains('nb-card', 'Using the Grid').contains('label','Option 1').find('input').click({force:true})
})