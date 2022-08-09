class DashboardPage {

    getActiTimeLogo(){
        return cy.get('#logo_aT')
    }

    getLogoutLink(){
        return cy.get('#logoutLink')
    }

}

export default DashboardPage