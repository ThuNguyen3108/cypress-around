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

it('Cypress Locator Methods', () => {
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

 it('Child Element', () => {
        cy.contains('nb-card', 'Using the Grid').find('.row').find('button')
        cy.get('nb-card').find('nb-radio-group').contains('Option 1')
        cy.get('nb-card > nb-card-body [placeholder="Email"]')

    })

it('Parent Element', () => {
    cy.get('#inputEmail1').parents('form').find('button')
    cy.contains('Using the Grid').parents().find('button')
    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button')
})

it('Cypress Chains', () => {
    // cy.get('#inputEmail1')
    // .parents('form')
    // .find('button')
    // .should('contain', 'Sign in')
    // .parents('nb-card')
    // .find('nb-card-header')
    // .should('contain', 'Using the Grid')
    cy.get('#inputEmail1')
    .parents('form')
    .find('button')
    .click()
    .parents('form')
    .find('nb-radio')
    .first()
    .should('have.text', 'Option 1')
})

it.only('Reusing Locators', () => {

    // This will not work !!! Don't do like this
    // const inputEmail1 = cy.get('#inputEmail1');
    // inputEmail1.parents('form').find('button')
    // inputEmail1.parents('form').find('nb-radio')

    // 1. Cypress Alias
    cy.get('#inputEmail1').as('inputEmail1')
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Using then() method
    // let foo; // foo is jQuery element
    cy.get('#inputEmail1').then(inputEmail => {
        // inputEmail là jQuery element
        // Tìm button trong cùng form và wrap lại thành Cypress chain
        cy.wrap(inputEmail.parents('form').find('button'))
        // Tìm nb-radio trong cùng form và wrap để dùng tiếp Cypress command
        cy.wrap(inputEmail.parents('form').find('nb-radio'))
        // Bạn cũng có thể wrap 1 string để assert
        cy.wrap('Hello').then( hello => {
            return hello
        }).should('equal', 'Hello')
       // foo = inputEmail

       cy.wrap(inputEmail).as('inputEmail2')
    })

    cy.get('@inputEmail2').click()
})





// describe('Test Suite 1', () => {
//     it('Test Case 1', () => {

//     })

//     it('Test Case 2', () => {
        
//     })
// })