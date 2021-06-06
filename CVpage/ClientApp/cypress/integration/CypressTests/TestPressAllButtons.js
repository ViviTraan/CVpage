///<reference types="cypress"/>

describe('TestPressAllButtons', () =>{
    it('PressHomeButton', () => {
        cy.visit('/')
        cy.get('[data-cy=home-button').click()
        cy.location('pathname').should('equals', '/CVpage/')
    });
    it('PressAboutButton', ()=>{
        cy.visit('/')
        cy.get('[data-cy=about-button').click()
        cy.location('pathname').should('equals', '/CVpage/')
    });
    it('PressResumeButton', ()=>{
        cy.visit('/')
        cy.get('[data-cy=resume-button').click()
        cy.location('pathname').should('equals', '/CVpage/')
    });
    it('PressContactButton', ()=>{
        cy.visit('/')
        cy.get('[data-cy=contact-button').click()
        cy.location('pathname').should('equals', '/CVpage/')
    });
    
})