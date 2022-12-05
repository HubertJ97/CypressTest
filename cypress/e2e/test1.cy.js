/// <reference types="cypress"/>




it('google test', () => {

    
    cy.visit('https://www.google.pl')
    cy.get('#L2AGLb').click()
    cy.get('.gLFyf').type('Automation step by step{enter}')
    cy.get('input.gLFyf').should('be.visible')
    cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
    

})