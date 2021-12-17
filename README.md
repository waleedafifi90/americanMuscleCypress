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

https://user-images.githubusercontent.com/57403758/146221964-47c4bba4-0129-4099-bda8-6f5dfe963ee4.mp4

### Test Run
<img width="565" alt="Screen Shot 2021-12-15 at 6 03 48 PM" src="https://user-images.githubusercontent.com/57403758/146221298-edca485a-3957-47cf-b95a-779a4feaf5d4.png">

### Description
This project built using Page Object Model, each module has it's folder and each folder contain ( items, page, actions, tests )

**Items** contain all items return `cy.get()` for the module

**Action** contain all triggers for the module

**Tests** contain all assertion for the module
**Pages** export the actions and tests to be used in the spec. file

 ---
 ### Part of work progress
 ![IMG_4909](https://user-images.githubusercontent.com/57403758/146592085-876a1d41-f2eb-4892-ba6e-ced17bca3f07.png)

 ---

### Spec. file
you can find the file containing all tests in the following path
```
/cypress/integration/american.spec.js
```

### Test cases covered
1. Verify home page title after visit website
2. Verify click on car type Camaro
3. Verify click on the 2016-2022 model year
4. Verify that the Camaro category is selected
5. Verify open the prats menu on Breaks -> click on Rotors
6. Verify the breadcrumb
7. Verify the current url
8. Verify about car in the parts page
9. Verify the marketing modal
10. Verify filter by (category, price, customer rate)
11. Verify product page details
12. Verify save the product to user saved list
13. Verify navigating to user account save list
14. Verify add saved product to the cart
15. Verify product details in the cart
16. Verify changing the quantity to 11
17. Verify mini cart changes
18. Verify the monthly payment
19. Verify product count after filter
20. Verify filters changes on change category filter

### Custom functions
1. Format money
2. Check url
3. Handle marketing modal


### Example data used for tests
You can find test data in the following path
```
/cypress/fixture/example.json
```
