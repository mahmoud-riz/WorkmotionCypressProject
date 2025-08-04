class TalentSearchViewLocators{
    Navigate_To_Talent_List(){
        return cy.get('[class="sc-lmsKoi iBvWFP"][style="margin-right: 10px;"]');
    }
    Exit_Button(){
        return cy.get('[class="sc-lmsKoi iBvWFP"][style="margin-right: 10px;"]');
    }
    Talent_Tab(){
        return cy.get('#sidebar-talents-link');
    }
    Onboarding_Tab(){
        return cy.get('#main-container > div > div.MuiBox-root.css-1fobf8d > div > div > div > button:nth-child(2)');
    }
    Search_Field(){
        return cy.get('[placeholder="Search for talent"]');
    }
    
    Talent_Name_Cells(){
        return cy.get('[data-cy="talents-name-cell"]');
    }

}
export default TalentSearchViewLocators;