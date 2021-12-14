export class MarketingModalItems {
  marketingModal() {
    return cy.get('div.marketing_modal');
  }

  marketingModalCloseButton() {
    return cy.get('div.marketing_modal a.close');
  }
}