import TalentOnboardingActions from "../Actions/TalentOnboardingActions";
import LoginActions from "../Actions/LoginActions";

describe('Talent Onboarding', () => {
    const loginActions = new LoginActions();
    const talentOnboardingActions = new TalentOnboardingActions();
    
    beforeEach(() => {
        loginActions.login({
            username: loginActions.userData.username,
            password: loginActions.userData.password
        });
        
        loginActions.verifySuccessfulLogin();
    });
    
    it('Verify that the user can onboard a new talent', () => {
        talentOnboardingActions.Add_New_Talent({
            CountryrofHire:talentOnboardingActions.userData.CountryrofHire,
            Firstname:talentOnboardingActions.userData.Firstname,
            Lastname:talentOnboardingActions.userData.Lastname,
            JopTitle:talentOnboardingActions.userData.JopTitle,
            Descreption:talentOnboardingActions.userData.Descreption,
            CostCenter:talentOnboardingActions.userData.CostCenter,
            
            CurrentCurrency:talentOnboardingActions.userData.CurrentCurrency,
            BaseSalary:talentOnboardingActions.userData.BaseSalary,
            TotalGross:talentOnboardingActions.userData.TotalGross,
            BonuesPayout:talentOnboardingActions.userData.BonuesPayout,
            SigningBonus:talentOnboardingActions.userData.SigningBonus,
            Email:talentOnboardingActions.userData.Email,
        });
        talentOnboardingActions.Verify_Talent_Onboarding_Success({
            Success_message:talentOnboardingActions.userData.Success_message
        });
    });
    it('Verify that the email filed is required to complet the application.', () => {
        talentOnboardingActions.NewTalent_WithoutMail({
            CountryrofHire:talentOnboardingActions.userData.CountryrofHire,
            Firstname:talentOnboardingActions.userData.Firstname,
            Lastname:talentOnboardingActions.userData.Lastname,
            JopTitle:talentOnboardingActions.userData.JopTitle,
            Descreption:talentOnboardingActions.userData.Descreption,
            CostCenter:talentOnboardingActions.userData.CostCenter,
            
            CurrentCurrency:talentOnboardingActions.userData.CurrentCurrency,
            BaseSalary:talentOnboardingActions.userData.BaseSalary,
            TotalGross:talentOnboardingActions.userData.TotalGross,
            BonuesPayout:talentOnboardingActions.userData.BonuesPayout,
            SigningBonus:talentOnboardingActions.userData.SigningBonus,
            Email:talentOnboardingActions.userData.Empty_Email,
        });
        talentOnboardingActions.Verify_madatoryFields({
            Warning_messages:talentOnboardingActions.userData.Warning_messages
        });

    });

});