export class CartPageItems {
  pageHeading() {
    return cy.get('div.cart h1.page_header');
  }

  cartList() {
    return cy.get('ul.cart_list');
  }

  cartListItem() {
    return cy.get('ul.cart_list li.product_item').first();
  }

  cartListItemProductName() {
    return cy.get('ul.cart_list li.product_item')
             .find('p.product_name');
  }

  cartListItemProductPrice() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('div.unit_price');
  }

  cartListItemProductQuantity() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('div.quantity');
  }

  cartListItemProductQuantityUL() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('ul.dropdown-menu');
  }

  cartListItemProductQuantityListItem(val) {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find(`ul.dropdown-menu li[data-value="${val}"]`);
  }

  cartListItemProductQuantityText() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('span.dropdown-text');
  }

  cartListItemProductQuantityButton() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('div.dropdown button');
  }

  cartListItemProductSubTotal() {
    return cy.get('ul.cart_list li.product_item')
             .first()
             .find('div.sub_total');
  }

  cartSummarySubTotal() {
    return cy.get('[data-qatgt="subtotal"]');
  }

  cartSummaryTotal() {
    return cy.get('[data-qatgt="total"] [data-key="Total"]');
  }

  cartContainer() {
    return cy.get('li.cart_container');
  }
  
  miniCartNav() {
    return cy.get('div.mini_nav li.cart_container > a span.cart_count');
  }

  miniCartContainer() {
    return cy.get('div.mini_cart');
  }

  monthlyPayment() {
    return cy.get('span.affirm-ala-price');
  }

  miniCartCount() {
    return cy.get('p.tiny_copy');
  }

  miniCartButtonCount() {
    return cy.get('div.button_container span.cart_count')
  }
}