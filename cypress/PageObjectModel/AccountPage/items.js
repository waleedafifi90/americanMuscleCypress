export class AccountPageItems {
  miniNav() {
    return cy.get('div.mini_nav');
  }

  accountLinkTrigger() {
    return cy.get('a.my_account_trigger');
  }

  accountQuickAction() {
    return cy.get('div.quick_action_container')
  }

  quickActionLink(selector) {
    return cy.get(`a[data-qatgt="${selector}"]`);
  }

  AccountHeadingTag() {
    return cy.get('div.myAccount h1');
  }

  myAccountSteps() {
    return cy.get('ul.steps');
  }

  myAccountSetpsItem(item) {
    return cy.get(`ul.steps li[data-pageid="${item}"]`);
  }

  buildList() {
    cy.get('ul.build_lists_ul')
  }

  buildListItem(id) {
    return cy.get(`li[data-buildlist-id="${id}"]`)
  }

  buildListItemCount(id) {
    return cy.get(`li[data-buildlist-id="${id}"] p`)
  }

  productListItem() {
    return cy.get('section.build_lists li.product_container');
  }

  productItemReview() {
    return cy.get('section.build_lists li.product_container span.reviews-number');
  }

  productItemName() {
    return cy.get('section.build_lists li.product_container a.product');
  }

  productItemPrice() {
    return cy.get('section.build_lists li.product_container span.price');
  }

  productItemStock() {
    return cy.get('section.build_lists li.product_container span.stock_status');
  }

  addToCartButton() {
    return cy.get(`a.add_to_cart`);
  }
}