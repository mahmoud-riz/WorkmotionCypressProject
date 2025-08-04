class LoginpageLocators {
  UserName() {
    return cy.get('#email');
  }

  Password() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }
  
  errorMessage() {
    return cy.get('body').contains('The email and / or the password you entered is invalid');
  }
  
}   
export default LoginpageLocators;