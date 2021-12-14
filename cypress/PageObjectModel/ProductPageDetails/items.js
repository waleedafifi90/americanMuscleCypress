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
    return cy.get('div.saved_for_later_login_container_top [data-qatgt="login_modal"]');
  }

  emailField() {
    return cy.get('div.saved_for_later_login_container_top [data-qatgt="login_modal"] input[name="email"]');
  }

  emailSubmit() {
    return cy.get('div.saved_for_later_login_container_top [data-qatgt="login_modal"] button[type="submit"]');
  }

  loginModalCloseButton() {
    return cy.get('div.saved_for_later_login_container_top [data-qatgt="login_modal"] div.link_close a');
  }

  savedIcon() {
    return cy.get('div[data-target="product_images"] [data-qatgt="sfl_pin"] span.sfl');
  }

  saveOnMainImage() {
    return cy.get('div[data-target="product_images"] [data-qatgt="sfl_pin"] span.save_text');
  }

}