# American Muscle Cypress

This repo. for testing list of features
- Navigate to car category
- Select car model year
- Choose spear part from the navigation
- check the product cards
- filter based on price, category, and customer review
- Check product page details
- Save the product to user list
- Navigate to user account save list
- Add the product to cat
- Check the item into the cart
- change the quantity
- check the price and the cart count

## Getting started
```javascript
//Clone the repo. using the next command
git clone https://github.com/waleedafifi90/americanMuscleCypress.git

// Install the packages using npm
npm install ci
```

### Requirentments
- Node js
- Chrome browser
  
### Dependencies used
1. [Cypress](https://www.cypress.io/)
2. [Cypress real events](https://github.com/dmtrKovalenko/cypress-real-events)

---
**To run the cypress runner**
```javascript
npx cypress open
```

### Test Run video


### Test Run

### Description
This project built using Page Object Model, each module has it's folder and each folder contain ( items, page, actions, tests )

**Items** contain all items return `cy.get()` for the module

**Action** contain all triggers for the module

**Tests** contain all assertion for the module
**Pages** export the actions and tests to be used in the spec. file

 ---

### Spec. file
you can find the file containing all tests in the following path
```
/cypress/integration/american.spec.js
```

### Test cases covered

