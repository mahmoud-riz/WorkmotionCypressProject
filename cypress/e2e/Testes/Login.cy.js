import LoginActions from '../Actions/LoginActions';


describe('Login', () => {
    const loginActions = new LoginActions();
    
    it('Verify that the user can login Successfully with valid credentials', () => {
        loginActions.login({ 
            username: loginActions.userData.username, 
            password: loginActions.userData.password 
        });
        
        loginActions.verifySuccessfulLogin();
    });
    
    it('Verify that the user cannot login with invalid credentials', () => {
        loginActions.login({ 
            username: loginActions.userData.invalidUsername, 
            password: loginActions.userData.invalidPassword 
        });
        
        loginActions.verifyFailure({ errorMessage: loginActions.userData.errorMessage });
    });
});