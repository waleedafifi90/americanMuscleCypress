import { CartPageItems } from "./items";

export class CartPageTests {
  constructor() {
    this.items = new CartPageItems;
  }

  pageTitle() {
    this.items.pageHeading()
        .should('contain', 'Your Cart');
  }

  checkCartListVisiblity() {
    this.items.cartList()
        .should('be.visible');
  }

  checkFirstItemName(name) {
    this.items.cartListItemProductName()
        .should('contain', name);
  }

  checkFirstItemPrice(price) {
    this.items.cartListItemProductPrice()
        .should('contain', price);
  }

  checkFirstItemSubPrice(subTotal) {
    this.items.cartListItemProductSubTotal()
        .should('contain', subTotal);
  }

  checkFirstItemQuantity(qty) {
    this.items.cartListItemProductQuantity()
        .should('contain', qty);
  }

  checkCartSummarySubTotal(total) {
    this.items.cartSummarySubTotal()
        .should('contain', total);
  }

  checkCartSummaryTotal(total) {
    this.items.cartSummaryTotal()
        .should('contain', total);
  }
}