import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('I should see {string} in the url', url => {
    cy.url().should('include', url)
})
