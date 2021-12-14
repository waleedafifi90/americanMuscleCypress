export class CartPageItems {
  pageHeading() {
    return cy.get('div.cart h1.header_page');
  }

  cartList() {
    return cy.get('ul.cart_list');
  }

  cartListItem() {
    return cy.get('ul.cart_list li.product_item').first();
  }

  cartListItemProductName() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('p.product_name');
  }

  cartListItemProductPrice() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('div.unit_price');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('div.quantity');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('ul.dropdown-menu');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('ul.dropdown-menu li');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('span.dropdown-text');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('div.dropup button');
  }

  cartListItemProductSubTotal() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .children('div.sub_total');
  }

  cartSummarySubTotal() {
    return cy.get('[data-qatgt="subtotal"]');
  }

  cartSummaryTotal() {
    return cy.get('[data-qatgt="total"] [data-key="Total"]');
  }
}