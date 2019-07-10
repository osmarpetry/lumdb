
context('Application test', () => {

    it('Go to movie movie', () => {
        cy.visit('http://localhost:8080')
        cy.get('[href="/429617"]').click()
    })

    it('Check content from movie', () => {
        cy.visit('http://localhost:8080/429617')
        cy.get('h1').contains('Spider-Man: Far from Home')
    })

    it('Go to movies from movie', () => {
        cy.get('[href="/429617"]').should('not.exist')
        cy.visit('http://localhost:8080/429617')
        cy.get('a').click()
        cy.get('[href="/429617"]').should('exist')
    })
})
