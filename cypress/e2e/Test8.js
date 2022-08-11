/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe("My Eighth Test Suite", function(){

    it("My Seventh Test Case", {tags: '@regression'}, function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        
    })

    it("My Eighth Test Case", {tags: '@smoke'}, function(){

        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
       
    })

})