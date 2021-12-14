import { AccountPageItems } from "./items";

export class AccountPageTests {
  constructor() {
    this.items = new AccountPageItems;
  }

  checkQiuckActionVisiblity() {
    this.items.accountQuickAction()
        .should('be.visible');
  }

  quickActionLinkStyle(data) {
    this.items.quickActionLink(data)
        .should('have.css', 'color', 'rgb(24, 145, 205)')
        .and('have.css', 'text-decoration', 'underline')
  }

  checkAccountPageHeading() {
    this.items.AccountHeadingTag()
        .should('contain', 'My Account')
        .and('be.visible');
  }

  checkAccountPageSteps() {
    this.items.myAccountSteps()
        .should('be.visible');
  }

  checkAccountPageStepsItem(data, val) {
    this.items.myAccountSetpsItem(data)
        .should('have.text', val)
  }

  checkItemCount(id) {
    this.items.buildListItemCount(id)
        .should('contain', 1)
  }

  productName(title) {
    this.items.productItemName()
        .should('contain', title);
  }

  productPrice(price) {
    this.items.productItemPrice()
        .should('contain', price);
  }

  checkStock() {
    this.items.productItemStock()
        .should('contain', 'In Stock')
  }

  checkAddToCartStyle(id) {
    this.items.addToCartButton(id)
        .should('have.css', 'background-color', 'rgb(245, 130, 31)')
        .and('have.css', 'border-bottom', '4px solid rgb(150, 73, 7)');
  }
}