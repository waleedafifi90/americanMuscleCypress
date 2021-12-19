export class ProductDetailsPageItems {
  productTitle() {
    return cy.get('h1.product_name');
  }

  productSubTitle() {
    return cy.get('h1.product_name span.fitment')
  }

  productImage() {
    return cy.get('div.image_container img');
  }

  productReview() {
    return cy.get('div.cart_actions span.count');
  }

  productPrice() {
    return cy.get('span.price_amount');
  }

  stockStatus() {
    return cy.get('span.stock_status');
  }

  DeliveryStatus() {
    return cy.get('span.delivery_message');
  }

  productSaveTrigger() {
    return cy.get('div.triggers').parent();
  }

  productSaveLink() {
    return cy.get('a.save_for_later_trigger')
  }

  savedMessage() {
    return cy.get('p.saved');
  }

  savedForLaterLoginOverlay() {
    return cy.get('div.saved_for_later_login_overlay');
  }

  savedForLaterLoginModal() {
    return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle');
  }

  emailField() {
    return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > #email');
  }

  emailSubmit() {
    return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > .alt_btn');
  }

  loginModalCloseButton() {
    return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .link_close > a');
  }

  savedIcon() {
    return cy.get('div[data-target="product_images"] [data-qatgt="sfl_pin"] span.sfl');
  }

  saveOnMainImage() {
    return cy.get('div[data-target="product_images"] [data-qatgt="sfl_pin"] span.save_text');
  }

  feedLinkButton() {
    return cy.get('button.feed_link_button');
  }

  exploreHeadLine() {
    return cy.get('h3.headline');
  }

  acordionTabs(carType) {
    return cy.get(`section[data-web-id*="${carType}"] p.title`);
  }

  carYearSelectionTitle(carType) {
    return cy.get(`section[data-vehicle-type*="${carType}"] p.title`);
  }

  carYearSelectionOption(carType) {
    return cy.get(`section[data-vehicle-type*="${carType}"] p.selected_options`);
  }

  carYearSelectionAction(carType) {
    return cy.get(`section[data-vehicle-type*="${carType}"] div.actions`);
  }
}