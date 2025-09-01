/// <reference types="cypress" />

beforeEach('Open test application',() => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
})

it('Hello world', () => {
  
    // by Tag
    cy.get('input');

    // by ID value
    cy.get('#inputEmail1');

    // by Class value
    cy.get('.input-full-width')

    // by Attribute name
    cy.get('[fullwidth]')

    // by Attribute name and value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // how to combine several attributes
    cy.get('input[placeholder="Email"][type="email"]')

    // by Tag name, Attribute with value, ID and Class name
    cy.get('input[fullwidth][id="inputEmail1"].input-full-width')

    // by Tag name, Attribute with value, Class name (most recommended way)
    cy.get('input[placeholder="Email"].input-full-width')

    // find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')

})

it.only('Cypress Locator Methods', () => {
    // Theory
    // get() - to find elements in the page
    // find() - to find only child elements
    // contains() - to find elements by text

    // cy.contains('Sign in').click();
    // cy.contains('Sign In', {matchCase: false}).click();
    // cy.contains('[status="warning"]', 'Sign in').click();
    // cy.contains('nb-card','Horizontal form').find('form').should('have.length', 1);
    // cy.contains('nb-card','Horizontal form').find('button')
    // cy.contains('nb-card','Horizontal form').find('button').should('contain', 'Sign in')
    cy.contains('nb-card','Horizontal form').contains('Sign in')
    cy.contains('nb-card','Horizontal form').get('button')


})

// describe('Test Suite 1', () => {
//     it('Test Case 1', () => {

//     })

//     it('Test Case 2', () => {
        
//     })
// })