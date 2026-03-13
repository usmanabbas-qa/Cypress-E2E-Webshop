class RegisterationPage{

    //locators
    registerationLink= ".ico-register"
    firstName = '[name="FirstName"]'
    lastName = '[name="LastName"]'
    emailField = '[name="Email"]' 
    passwordField = '[name="Password"]'
    confirmPasswordField = '[name="ConfirmPassword"]'
    registerButton = '[name="register-button"]'

    clickRegisterLink(){
        cy.get(this.registerationLink).click();
    }

    selectMale(){
        cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click();
    }

    selectFemale(){
        cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(3)').click();
    }

    firstNameField(fname){
        cy.get(this.firstName).type(fname);
    }

    lastNameField(lname){
        cy.get(this.lastName).type(lname);
    }

    enterEmail(email){
        cy.get(this.emailField).type(email);
    }

    enterPassword(pass){
        cy.get(this.passwordField).type(pass);
    }   

    enterConfirmPassword(confirm){
        cy.get(this.confirmPasswordField).type(confirm);
    }

    registerUser(fname,lname,email,pass,confirm){
        this.firstNameField(fname)
        this.lastNameField(lname)
        this.enterEmail(email)
        this.enterPassword(pass)
        this.enterConfirmPassword(confirm)
    }

    clickRegisterButton(){
        cy.get(this.registerButton).click();
    }

    verifyUrl(expectedPath) {
    cy.url().should('include', expectedPath);
    
    cy.log(`Successfully verified that URL contains: ${expectedPath}`);
    }

    generateRandomEmail() {
    const timestamp = new Date().getTime(); 
    return `testuser_${timestamp}@example.com`;
    }

    clickContinueButton(){
        cy.get('.page-body > .buttons > .button-1').click();
    }

    verifyErrorMessage(expectedMessage) {
    cy.get('.validation-summary-errors > ul > li')
        .should('be.visible')
        .and('contain.text', expectedMessage);
        cy.log('Verified Error Message: ' + expectedMessage);
    }

    verifyEmailErrorMessage(expectedMessage) {
    cy.get('.field-validation-error > span')
        .should('be.visible')
        .and('contain.text', expectedMessage);
        cy.log('Verified Error Message: ' + expectedMessage);
    }

    verifyPasswordErrorMessage(expectedMessage) {
    cy.get(':nth-child(2) > .field-validation-error > span')
        .should('be.visible')
        .and('contain.text', expectedMessage);
        cy.log('Verified Error Message: ' + expectedMessage);
    }
}
export default RegisterationPage;