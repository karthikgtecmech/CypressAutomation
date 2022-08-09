class LoginPage {

    getUserNameTextField(){
        return cy.get('#username')
    }

    getPasswordTextField(){
        return cy.get('input[name="pwd"]')
    }

    getKeepMeLoggedInCheckbox(){
        return cy.get('#keepLoggedInCheckBox')
    }

    getLoginButton(){
       return cy.get('#loginButton')
    }

    getForgotPasswordLink(){
       return cy.get('#toPasswordRecoveryPageLink')
    }

    getForgotPasswordTextField(){
       return cy.get('#forgetPasswordEmailOrUsername')
    }

    getRequestLoginInfoButton(){
        return cy.get('#forgetPasswordButton > div') 
    }
    
    getForgotPasswordMsg(){
        return cy.get('#noteContainer')
    }

}

export default LoginPage