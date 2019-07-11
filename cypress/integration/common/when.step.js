import { When } from 'cypress-cucumber-preprocessor/steps'

When('I click on {string}', button => {
    cy.get(`button[name=${button}]`).click()
})
