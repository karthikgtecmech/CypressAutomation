/// <reference types="Cypress" />
import DashboardPage from "../support/pageObjects/DashboardPage"
import LoginPage from "../support/pageObjects/LoginPage"

describe("Get Data from Excel sheet", function () {

    let username, password

    before(function () {
        cy.parseXlsx('cypress/fixtures/TestData.xlsx').then((jsonData) => {
            username = jsonData[0].data[1][0]
            password = jsonData[0].data[1][1]
        })
    })

    it("Get Data from Excel sheet", function () {

        const loginPage = new LoginPage()
        const dashboardPage = new DashboardPage()

        cy.visit('https://demo.actitime.com/')
        loginPage.getUserNameTextField().type(username)
        loginPage.getPasswordTextField().type(password)
        loginPage.getKeepMeLoggedInCheckbox().check().should('be.checked')
        loginPage.getLoginButton().click()
        dashboardPage.getActiTimeLogo().should('be.visible')
        dashboardPage.getLogoutLink().click()
        loginPage.getLoginButton().should('be.visible')

    })

})