import TalentSearchViewActions from "../Actions/FilterandSearch";
import LoginActions from "../Actions/LoginActions";

describe('Talent List', () => {
    const talentSearchViewActions = new TalentSearchViewActions();
    const loginActions = new LoginActions();

    beforeEach(() => {
        loginActions.login({
            username: loginActions.userData.username,
            password: loginActions.userData.password
        });
        loginActions.verifySuccessfulLogin();
        cy.wait(1000);
    });
    
    it('Verify that the user can search for a talent', () => {
        talentSearchViewActions.Talent_List({Search_Feild:talentSearchViewActions.userData.Search_Feild});
        talentSearchViewActions.verify_All_Talents_Contain_Name('Mahmoud Samy');
    });
});