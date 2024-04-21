///<reference types="cypress" />
describe('template spec', () => {
  it('Webapp deve estar online', () => {
    cy.visit('https://oip-383-bugs-cave.buyco.com.br')
 
    cy.title().should('eq', 'Calculadora de Valuation - BuyCo')
  })
})