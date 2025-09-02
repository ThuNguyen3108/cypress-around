/// <reference types="cypress" />
import 'cypress-iframe'   // cần import nếu bạn dùng cypress-iframe

beforeEach('Open application', () => {
  cy.visit('/')
})

it.only('iframes', () => {
  cy.contains('Modal & Overlays').click()
  cy.contains('Dialog').click()

  // Load iframe
  cy.frameLoaded('[data-cy="esc-close-iframe"]')

  // Lần 1: mở dialog có esc-close và dismiss
  cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog with esc close').click()
  cy.contains('Dismiss Dialog').click()

  // Lần 2: mở dialog không có esc-close và OK
  cy.iframe('[data-cy="esc-close-iframe"]').contains('Open Dialog without esc close').click()
  cy.contains('OK').click()
})
