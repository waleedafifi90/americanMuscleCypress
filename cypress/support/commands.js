// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-real-events/support";
import { MarketingModalActions } from "../PageObjectModel/MarketingModal/actions";
import { Utils } from "../PageObjectModel/utils";

const utils = new Utils;
const modalAction = new MarketingModalActions();

Cypress.Commands.add('marketingModal', () => {
  
  utils.bodyElement().then(el => {
    const modal = el.find('div.marketing_modal');
    if(modal.length) {
      if(!modal.hasClass('hidden')) {
        modalAction.closeMarketingModal();
      }
    }
  })
});

Cypress.Commands.overwrite("clearCookies", () => {
  cy.getCookies().then(cookies => {
      for (const cookie of cookies) {
          cy.clearCookie(cookie.name)
      }
  })
})