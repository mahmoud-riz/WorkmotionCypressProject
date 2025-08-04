import TalentSearchViewLocators from "../Locators/Talent _Search_View";
import { data } from "../Resources/Data";


class TalentSearchViewActions{
    TalentSearchViewLocators = new TalentSearchViewLocators();
    userData = data.Talentonboarder;
    Talent_List({Search_Feild}){
        this.TalentSearchViewLocators.Navigate_To_Talent_List().click();
        cy.wait(1000);
        this.TalentSearchViewLocators.Talent_Tab().click();
        cy.wait(1000);
        this.TalentSearchViewLocators.Exit_Button().click();
        cy.wait(1000);
        this.TalentSearchViewLocators.Onboarding_Tab().click();
        cy.wait(1000);
        this.TalentSearchViewLocators.Search_Field().type(Search_Feild);
    }


    verify_All_Talents_Contain_Name(expectedName){
    cy.wait(2000);
    this.TalentSearchViewLocators.Talent_Name_Cells().should('have.length.greaterThan', 0);
    this.TalentSearchViewLocators.Talent_Name_Cells().then(($elements) => {
        $elements.each((index, element) => {
        expect(element.textContent).to.contain(expectedName);
        });
    });
    }
}

export default TalentSearchViewActions;