import LoginpageLocators from "../Locators/Login_Locators";
import { data } from "../Resources/Data";

class LoginActions {
  log = new LoginpageLocators();
  userData = data.Login;
  
  login({username, password}) {
    cy.wait(2000);
    cy.visit('https://beta.workmotion.com/login');
    this.log.UserName().type(username);
    this.log.Password().type(password);
    this.log.loginButton().click();
    cy.wait(2000);
  }

  verifyFailure({errorMessage}) {
    
    this.log.errorMessage().should('be.visible');
    this.log.errorMessage().should('contain', errorMessage);
    
  }
  
  verifySuccessfulLogin() {
    // Add timeout and more flexible URL check
    cy.url({ timeout: 10000 }).should('not.contain', '/login');
  }
}

export default LoginActions;
  