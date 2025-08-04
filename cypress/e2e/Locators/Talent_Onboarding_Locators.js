class TalentOnboardingLocators {
    AddTalentButton() {
        return cy.get('#mobile-header > div:nth-of-type(2) > button:nth-of-type(2)');
    }
    
    AddTelentButton2() {
        return cy.get('.sc-kCMKrZ.dtrYKW');
    }
    CountryrofHire() {
        return cy.get('#select-country');
    }
    GetstartedButton() {
        return cy.get('#onboarding-get-started-btn');
    }

    Firstname_Feild(){
        return cy.get('#d5deff3f-7772-328f-b79c-0eb7d0c51a85');
    }
    Lastname_Feild(){
        return cy.get('#e64f0cca-edaa-3fdf-9490-c90f09f44e64');
    }
    Eligible_work_CheckBox(){
        return cy.get('[name="6c20042a-4bfd-312b-b00d-f25fcc2d69de-Yes"][type="radio"]');
    }
    Talent_Executive_CheckBox(){
        return cy.get('[name="769be8cd-0214-32b3-9f7f-ee8719f2abe2-Yes"][type="radio"]');
    }

    JopTitle_Feild(){
        return cy.get('#a55bffc6-7f57-3036-bcdd-f49158941f71');
    }
    Descreption_Feild(){
        return cy.get('#d3f07c10-4e02-3ab7-8b9d-fa4dec585b3d');
    }
    EmployeeType_checkBox(){
        return cy.get('[name="0f9d5320-f71d-3458-ac58-093c65081831-full-time"][type="radio"]');
    }
    FixedTerm_checkBox(){
        return cy.get('[name="a2c1ae1e-7ecc-31bd-9515-1928a5a17368-fixed-term"][type="radio"]');
    }
    
    startDate_field(){
        cy.get('#4888400e-89f4-3c79-8b11-012ac7215428').click();
        cy.get('.MuiPickersDay-root').contains('15').click();
        return cy.get('[data-cy="mui-datepicker-actions-accept"]');
    }
    
    endDate_field(){
        cy.get('#0b0d03f9-613f-3175-812d-e5343c50aab2').click();
        cy.get('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiPickersCalendarHeader-switchViewIcon.css-sldnni').click();
        cy.get('.PrivatePickersYear-yearButton.Mui-selected.css-m1gykc').click();
        return cy.get('[data-cy="mui-datepicker-actions-accept"]');
    }
    
    endDate_field_alternative(){
        cy.get('#0b0d03f9-613f-3175-812d-e5343c50aab2').click();
        
        cy.get('body').then(($body) => {
            if ($body.find('.MuiSvgIcon-root').length > 0) {
                cy.get('.MuiSvgIcon-root').first().click();
            } else if ($body.find('[data-testid="calendar-year-selector"]').length > 0) {
                cy.get('[data-testid="calendar-year-selector"]').click();
            } else {
                cy.get('#0b0d03f9-613f-3175-812d-e5343c50aab2').type('2025-01-15');
            }
        });
        return cy.get('[data-cy="mui-datepicker-actions-accept"]');
    }
    
    model_of_work(){
        return cy.get('[name="c3950686-6ffb-3a4a-9677-2304ea71bc6c-Yes"][type="radio"]');
    }
    reimburseExpenses_checkBox(){
        return cy.get('[name="43726060-8606-3432-926d-2ac495de2001-Yes"][type="radio"]');
    }
    CostCenter_Feild(){
        return cy.get('#95d8516e-aa04-3721-abce-61a0d92739ea');
    }

    SubEntity_Feild(){
        return cy.get('.css-hlgwow');
    }
    Continue_Button(){
        return cy.get('#onboarding-continue-btn');
    }
    probationPeriod_checkBox(){
        return cy.get('[name="85bfc1b0-13fe-361b-9de4-582627e68998-Yes"][type="radio"]');
    }
    continue_button2(){
        return cy.get('#onboarding-continue-btn');
    }
    TalentESOB(){
        return cy.get('[name="3427ebc4-8074-35ca-9083-f61089922b63-Yes"][type="radio"]');
    }

    Policy_checkBox(){
        return cy.get('.sc-gtsqUy.eKrkml');
    }

    CurrentCurrency_Feild(){
        return cy.get('.css-hlgwow');
    }
    BaseSalary_Feild(){
        return cy.get('#5fc37517-1b97-3de9-a054-7465d18085b6');
    }
    Bonues_checkBox(){
        return cy.get('[name="c20a642f-5ef3-397b-80cb-7e1cc16109e3-No"][type="radio"]');
    }
    TotalGross_Feild(){
        return cy.get('#dcb2da79-de41-3773-9fcb-0b5e16f706b0');
    }
    BonuesPayout_Feild(){
        return cy.get('[data-cy="steps-bonus-payout-frequency-select-input"]');
    }

    Variablebonues_checkBox(){
        return cy.get('[name="8c939979-011e-3945-9e72-d38988d1cdcc-No"][type="radio"]');
    }
    TotalGrossBonues_Feild(){
        return cy.get('#dcb2da79-de41-3773-9fcb-0b5e16f706b0');
    }
    VariablebonuesPayout_Feild(){
        return cy.get('.css-ocl1rl-control');
    }
    SigningBonus_Feild(){
        return cy.get('#b08f9827-c1cb-39c0-894c-508e5aef7b3e');
    }
    Allowance_checkBox(){
        return cy.get('[name="8b7fed89-2e6d-3dd2-80e1-2b67b74b89a4.newAllowance-No"][type="radio"]');
    }
    continue_button3(){
        return cy.get('#onboarding-continue-btn');
    }
    payrollstartDate_Feild(){
        return cy.get('#2812e16f-108f-3403-8ba7-100860d9948c');
    }
    Email_Feild(){
        return cy.get('#b08ff779-a9d1-390f-bef4-2e7cf5bd178e');
    }
    continue_button4(){
        return cy.get('#onboarding-continue-btn');
    }
    confirmation_checkBox(){
        return cy.get('.sc-gtsqUy.eKrkml');
    }
    finish_button(){
        return cy.get('#onboarding-finish-btn');
    }

    Success_message(){
    return cy.get('body').contains('Thank you for completing the onboarding!');
    }
    Warning_message(){
        return cy.get('body').contains("Talent's email field is required");
    }


    GoToTalent_button(){
        return cy.get('.sc-iCoHzw.cbHuaw');
    }
}

export default TalentOnboardingLocators;