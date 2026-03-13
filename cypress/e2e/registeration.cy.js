import RegisterationPage from "../pages/RegisterationPage";

describe('Login Test Suite', () => {

    const Register = new RegisterationPage();
    const randomEmail = Register.generateRandomEmail();

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/')
        Register.clickRegisterLink();
    })

    it("Verify that a user can register with all valid mandatory fields.",()=>{
        
        Register.registerUser('best','user',randomEmail,'test123','test123');
        Register.clickRegisterButton();
        Register.verifyUrl('/register');
        Register.clickContinueButton();
    })

    it('Verify error message when registering with an email already in the database.',()=>{
        Register.registerUser('best','user','test@gmail.com','test123','test123');
        Register.clickRegisterButton();
        Register.verifyErrorMessage('The specified email already exists');
    })

    it("Verify validation error for incorrectly formatted email addresses.",()=>{
        Register.registerUser('best','user','test@.com','test123','test123');
        Register.clickRegisterButton();
        Register.verifyEmailErrorMessage('Wrong email');
    })

    it("Verify that registration fails if 'Password' and 'Confirm Password' do not match.",()=>{
        Register.registerUser('best','user',randomEmail,'tes123','test123');
        Register.clickRegisterButton();
        Register.verifyPasswordErrorMessage('The password and confirmation password do not match.');
    })

    it.only("Verify validation triggers when clicking Register without filling any data.",()=>{
        Register.registerUser(' ',' ',' ',' ',' ');
        Register.clickRegisterButton();
        Register.verifyPasswordErrorMessage('Password is required.');
    })
        
    
})
