import LoginPage from '../pages/LoginPage'

describe('Login Test Suite', () => {

     const login = new LoginPage();

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/')
        login.clickLoginLink();
    })

    it('Verify user can login with valid credentials', () => {
        login.login('user@tr.co', 'test123');
        cy.url().should('contains', '/demowebshop')
    })

    it("Verify error message when using a correct email but wrong password.",()=>{
        login.login('user@tr.co', 'test1123');
        login.verifyErrorMessage('The credentials provided are incorrect');
    })
    
    it("Verify error message when attempting to login with an email not in the system.",()=>{
        login.login('user@treat.co', 'test123');
        login.verifyErrorMessage('No customer account found');
    })

    it("Verify validation when both Email and Password fields are left blank.",()=>{
        login.login(" "," ");
        login.verifyErrorMessage('No customer account found');
    })

    it("Verify if the 'Remember me' checkbox remains checked after page refresh.",()=>{
        login.enterEmail("user@tr.co")
        login.enterPassword("test123")
        login.ClickRememberMe();
        cy.reload();
        login.checkRememberMeStatus();
    })

    it("Login with Invalid Email Format",()=>{
        login.enterEmail("usertr.co")
        login.enterPassword("test123")
        login.clickLogin();
        login.emailErrorMessage('Please enter a valid email address.');
    })

    it("Verify that a user can successfully log out after being logged in.",()=>{
        login.login('user@tr.co', 'test123');
        login.clickLogout();
    })

    it("Verify that the user is redirected to the home page or previous page after login.",()=>{
        login.login('user@tr.co', 'test123');
        login.clickLogout();
    })

})