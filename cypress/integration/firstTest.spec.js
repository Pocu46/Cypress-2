it('Search elements by ID', () => {
    cy.visit('https://facebook.com')
    cy.get('#email')
})

it('Search elements by Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('.ds-input')
})

it('Search elements by Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('nav')
})

it('Search elements by Tag value', () => {
    cy.visit('https://facebook.com')
    cy.get('[name="pass"]')
})

it('Search elements by Different Tag', () => {
    cy.visit('https://facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
})

it('Search elements by Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('button[type="button"][title="close banner"]')
})

it.only('Search elements by Contains Name', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
})