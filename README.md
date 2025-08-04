# Workmotion Cypress Test Automation Project

## Overview
This Cypress test automation project is designed to test the Workmotion platform, specifically focusing on login functionality, talent search and filtering, and talent onboarding processes. The project follows a Page Object Model (POM) design pattern for better maintainability and reusability.

## Project Structure
```
WorkmotionCypressProject/
├── cypress/
│   ├── e2e/
│   │   ├── Actions/           # Page Object Actions
│   │   │   ├── LoginActions.js
│   │   │   ├── FilterandSearch.js
│   │   │   └── TalentOnboardingActions.js
│   │   ├── Locators/          # Page Object Locators
│   │   │   ├── Login_Locators.js
│   │   │   ├── Talent _Search_View.js
│   │   │   └── Talent_Onboarding_Locators.js
│   │   ├── Resources/         # Test Data
│   │   │   └── Data.js
│   │   └── Testes/           # Test Specifications
│   │       ├── Login.cy.js
│   │       ├── TalentList.cy.js
│   │       └── TalentOnboarding.cy.js
│   ├── fixtures/             # Test Fixtures
│   ├── screenshots/          # Test Screenshots
│   └── support/              # Support Files
├── cypress.config.js         # Cypress Configuration
├── package.json              # Project Dependencies
└── README.md                # Project Documentation
```

## Features Tested

### 1. Login Functionality
- **Valid Login**: Tests successful login with valid credentials
- **Invalid Login**: Tests login failure with invalid credentials
- **Error Handling**: Verifies appropriate error messages are displayed

### 2. Talent Search and Filtering
- **Talent List Navigation**: Navigates to talent list and onboarding sections
- **Search Functionality**: Searches for specific talents by name
- **List Verification**: Verifies that all displayed talents contain expected names
- **DOM Stability**: Handles dynamic content updates and DOM detachment issues

### 3. Talent Onboarding
- **Complete Onboarding**: Tests the full talent onboarding process with all required fields
- **Mandatory Field Validation**: Tests validation for required fields (e.g., email)
- **Success Verification**: Verifies successful onboarding completion
- **Error Handling**: Tests error scenarios and warning messages

## Test Data Configuration

### Login Data
```javascript
{
    username: "avengers.engineering+hr1@workmotion.com",
    password: "DummyPass.12",
    errorMessage: "The email and / or the password you entered is invalid",
    invalidUsername: "mohamed@workmotion.com",
    invalidPassword: "123"
}
```

### Talent Onboarding Data
```javascript
{
    CountryrofHire: "Egypt{enter}",
    Firstname: "Mahmoud",
    Lastname: "Samy",
    JopTitle: "Software Test AutomationEngineer",
    Descreption: "Software Engineer",
    CostCenter: "1000",
    CurrentCurrency: "EGP - Egyptian Pound{enter}",
    BaseSalary: "1000",
    SigningBonus: "100",
    Email: "mahmoud${Math.floor(Math.random() * 100)}@workmotion.com"
}
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WorkmotionCypressProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Cypress (if not already installed)**
   ```bash
   npx cypress install
   ```

## Running Tests

### Open Cypress Test Runner
```bash
npx cypress open
```

### Run Specific Test Files
```bash
# Run all tests
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/Testes/Login.cy.js"
npx cypress run --spec "cypress/e2e/Testes/TalentList.cy.js"
npx cypress run --spec "cypress/e2e/Testes/TalentOnboarding.cy.js"
```

### Run Tests in Headless Mode
```bash
npx cypress run --headless
```

## Test Specifications

### Login Tests (`Login.cy.js`)
- **Valid Login Test**: Verifies successful login with valid credentials
- **Invalid Login Test**: Verifies login failure with invalid credentials

### Talent List Tests (`TalentList.cy.js`)
- **Talent Search Test**: Searches for talents and verifies all results contain expected names
- **DOM Stability**: Handles dynamic content updates

### Talent Onboarding Tests (`TalentOnboarding.cy.js`)
- **Complete Onboarding Test**: Tests full talent onboarding process
- **Mandatory Field Test**: Tests validation for required email field

## Key Features

### Error Handling
- **Uncaught Exception Handling**: Prevents test failures due to uncaught exceptions
- **Network Error Handling**: Handles "Failed to fetch" errors gracefully
- **DOM Detachment Handling**: Prevents issues with dynamic content updates

### Wait Strategies
- **Explicit Waits**: Uses `cy.wait()` for critical operations
- **Timeout Configuration**: Configures appropriate timeouts for different operations
- **Element Stability**: Ensures elements are stable before interactions

### Data Management
- **Centralized Test Data**: All test data is managed in `Data.js`
- **Dynamic Data**: Uses random email generation for unique test data
- **Environment Configuration**: Supports different environments through configuration

## Configuration

### Cypress Configuration (`cypress.config.js`)
```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
```

### Package Dependencies
- **cypress**: ^14.5.3 - Main testing framework
- **cypress-xpath**: ^2.0.1 - XPath support for element selection

## Best Practices Implemented

1. **Page Object Model**: Separates locators, actions, and test logic
2. **Reusable Components**: Actions and locators are reusable across tests
3. **Data-Driven Testing**: Test data is externalized and configurable
4. **Error Handling**: Comprehensive error handling for robust test execution
5. **Wait Strategies**: Appropriate wait strategies for dynamic content
6. **Clean Code**: Well-structured and maintainable code

## Troubleshooting

### Common Issues

1. **"No tests found" Error**
   - Ensure all imports are correct
   - Check file paths and naming conventions
   - Verify test file structure

2. **DOM Detachment Errors**
   - Use `.then()` instead of chaining Cypress commands
   - Add appropriate waits for dynamic content
   - Use `expect()` instead of `cy.wrap().should()` in loops

3. **Network Errors**
   - Add `failOnStatusCode: false` to visit commands
   - Handle uncaught exceptions with `cy.on('uncaught:exception')`

4. **Timeout Issues**
   - Configure appropriate timeouts for different operations
   - Use explicit waits for critical operations
   - Verify element selectors are correct

## Contributing

1. Follow the existing code structure and naming conventions
2. Add appropriate error handling for new features
3. Update test data in `Data.js` for new test scenarios
4. Ensure all tests are passing before submitting changes

## Support

For issues and questions:
- Check the troubleshooting section above
- Review Cypress documentation
- Ensure all dependencies are properly installed
- Verify test environment configuration
