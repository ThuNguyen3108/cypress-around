

class FormLayoutsPage {
    submitUsingTheGridForm(email, password, optionIndex) {
        cy.contains('nb-card', 'Using the Grid').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force:true})
            cy.wrap(form).contains('Sign in')
        })
    }

    submitBasicForm(email, password, isChekboxSelected) {
        cy.contains('nb-card', 'Basic form').then(form => {
            cy.wrap(form).find('[placeholder = "Email"]').type(email)
            cy.wrap(form).find('[placeholder = "Password"]').type(password)
            if(isChekboxSelected) {
                cy.wrap(form).find('[type="checkbox"]').check({force:true})
            }
            cy.wrap(form).contains('Submit')
        })
    }
}

// formLayoutsPage.js
export const onFormLayoutsPage = new FormLayoutsPage()