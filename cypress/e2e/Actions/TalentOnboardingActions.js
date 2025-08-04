import TalentOnboardingLocators from "../Locators/Talent_Onboarding_Locators";
import { data } from "../Resources/Data";

class TalentOnboardingActions
{
    NewTalent = new TalentOnboardingLocators();
    userData = data.Talentonboarder;

    Add_New_Talent({CountryrofHire,Firstname,Lastname,JopTitle,Descreption,CostCenter,CurrentCurrency,BaseSalary,TotalGross,BonuesPayout,SigningBonus,Email})
    {
        this.NewTalent.AddTalentButton().click();
        cy.wait(1000);
        this.NewTalent.AddTelentButton2().click();
        this.NewTalent.CountryrofHire().type(CountryrofHire);
    
        
        this.NewTalent.GetstartedButton().click();
        cy.wait(1000);
        this.NewTalent.Firstname_Feild().type(Firstname);
        this.NewTalent.Lastname_Feild().type(Lastname);
        this.NewTalent.Eligible_work_CheckBox().click();
        this.NewTalent.Talent_Executive_CheckBox().click();
        this.NewTalent.JopTitle_Feild().type(JopTitle);
        this.NewTalent.Descreption_Feild().type(Descreption);
        this.NewTalent.EmployeeType_checkBox().click();
        this.NewTalent.FixedTerm_checkBox().click();
        this.NewTalent.startDate_field().click();
        this.NewTalent.endDate_field().click();
        this.NewTalent.model_of_work().click();
        this.NewTalent.reimburseExpenses_checkBox().click();
        this.NewTalent.CostCenter_Feild().type(CostCenter);
        this.NewTalent.Continue_Button().click();
        cy.wait(1000);
        this.NewTalent.probationPeriod_checkBox().click();
        this.NewTalent.continue_button2().click();
        cy.wait(2000);
        this.NewTalent.TalentESOB().click();
        this.NewTalent.Policy_checkBox().click();
        this.NewTalent.CurrentCurrency_Feild().type(CurrentCurrency);
        this.NewTalent.BaseSalary_Feild().type(BaseSalary);
        this.NewTalent.Bonues_checkBox().click();
        this.NewTalent.Variablebonues_checkBox().click();
        this.NewTalent.SigningBonus_Feild().type(SigningBonus);
        this.NewTalent.Allowance_checkBox().click();
        this.NewTalent.continue_button3().click();

        this.NewTalent.Email_Feild().type(Email);
        this.NewTalent.continue_button4().click();
        cy.wait(2000);
        this.NewTalent.confirmation_checkBox().click();
        this.NewTalent.finish_button().click();
    }



    NewTalent_WithoutMail({CountryrofHire,Firstname,Lastname,JopTitle,Descreption,CostCenter,CurrentCurrency,BaseSalary,TotalGross,BonuesPayout,SigningBonus,Email})
    {
        cy.wait(2000);
        this.NewTalent.AddTalentButton().click();
        cy.wait(1000);
        this.NewTalent.AddTelentButton2().click();
        this.NewTalent.CountryrofHire().type(CountryrofHire);
        this.NewTalent.GetstartedButton().click();
        this.NewTalent.Firstname_Feild().type(Firstname);
        this.NewTalent.Lastname_Feild().type(Lastname);
        this.NewTalent.Eligible_work_CheckBox().click();
        this.NewTalent.Talent_Executive_CheckBox().click();
        this.NewTalent.JopTitle_Feild().type(JopTitle);
        this.NewTalent.Descreption_Feild().type(Descreption);
        this.NewTalent.EmployeeType_checkBox().click();
        this.NewTalent.FixedTerm_checkBox().click();
        this.NewTalent.startDate_field().click();
        this.NewTalent.endDate_field().click();
        this.NewTalent.model_of_work().click();
        this.NewTalent.reimburseExpenses_checkBox().click();
        this.NewTalent.CostCenter_Feild().type(CostCenter);
        this.NewTalent.Continue_Button().click();
        cy.wait(1000);
        this.NewTalent.probationPeriod_checkBox().click();
        this.NewTalent.continue_button2().click();
        cy.wait(2000);
        this.NewTalent.TalentESOB().click();
        this.NewTalent.Policy_checkBox().click();
        this.NewTalent.CurrentCurrency_Feild().type(CurrentCurrency);
        this.NewTalent.BaseSalary_Feild().type(BaseSalary);
        this.NewTalent.Bonues_checkBox().click();
        this.NewTalent.Variablebonues_checkBox().click();
        this.NewTalent.SigningBonus_Feild().type(SigningBonus);
        this.NewTalent.Allowance_checkBox().click();
        this.NewTalent.continue_button3().click();

        this.NewTalent.continue_button4().click();
    }
    Verify_madatoryFields({Warning_messages}){

    this.NewTalent.Warning_message().should('contain',Warning_messages);
    }

    Verify_Talent_Onboarding_Success( {Success_message})
    {
        this.NewTalent.Success_message().should('contain',Success_message);
    }


}

export default TalentOnboardingActions;