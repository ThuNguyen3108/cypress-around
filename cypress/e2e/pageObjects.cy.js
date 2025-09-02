/// <reference type="cypress"

import { navigateTo } from "../page-objects/navigationPage"

beforeEach('Open application', () => {
    cy.visit('/')
})

it('navigation test', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
})