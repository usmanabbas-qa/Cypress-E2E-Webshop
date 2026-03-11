class LoginPage {

    // Locators
    emailField = '[name="Email"]'
    passwordField = '[name="Password"]'
    loginLink = '.ico-login'
    errorMessage = '.validation-summary-errors > ul > li'
    loginButton = 'form > .buttons > .button-1'
    rememberMe= '#RememberMe'

    // Actions
    enterEmail(username) {
        cy.get(this.emailField).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    clickLoginLink(){
        cy.get(this.loginLink).click();
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }

    login(username, password) {
        this.enterEmail(username)
        this.enterPassword(password)
        this.clickLogin();
    }

    verifyErrorMessage(expectedMessage) {
    cy.get(this.errorMessage)
        .should('be.visible')
        .and('contain.text', expectedMessage);
        cy.log('Verified Error Message: ' + expectedMessage);
    }

    ClickRememberMe(){
        cy.get(this.rememberMe).click();
    }

    // Assertion Method
    checkRememberMeStatus() {
    cy.get(this.rememberMe).then((checkbox) => {
        if (checkbox.is(':checked')) {
            cy.log('Status: Remember Me is CHECKED');
        } else {
            cy.log('Status: Remember Me is NOT checked');
        }
    })
    }

    emailErrorMessage(message){
        cy.get('.field-validation-error > span').should('be.visible').and('contains.text',message);
    }

    clickLogout(){
        cy.get(".ico-logout").click();
    }

}

export default LoginPage;