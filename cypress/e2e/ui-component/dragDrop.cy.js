/// <reference types="cypress" />

beforeEach('Open application', () => {
  cy.visit('/')
})

it.only('drag and drop', () => {
  cy.contains('Extra Components').click()
  cy.contains('Drag & Drop').click()

  const dataTransfer = new DataTransfer()

  cy.get('#todo-list div').first().trigger('dragstart', { dataTransfer })
  cy.wait(10000)
  cy.get('#drop-list').trigger('drop', { dataTransfer })
})
