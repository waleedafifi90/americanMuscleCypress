import { ProductDetailsPageItems } from "./items";

export class ProductPageDetailsTests {
  constructor() {
    this.items = new ProductDetailsPageItems;
  }

  checkProductName(title) {
    this.items.productTitle()
        .should('contain', title);
  }

  checkSubTitle(sub) {
    this.items.productSubTitle()
        .should('contain', sub);
  }

  checkReviewCount(val) {
    this.items.productReview()
        .should('contain', val)
        .and('have.css', 'color', 'rgb(24, 145, 205)');
  }

  checkProductPrice(price) {
    this.items.productPrice()
        .should('contain', price);
  }

  checkStockStatus() {
    this.items.stockStatus()
        .should('contain', 'In Stock')
  }

  checkDeliveryStatus(stat) {
    this.items.DeliveryStatus()
        .should('contain', stat)
        .and('have.css', 'color', 'rgb(12, 192, 0)');
  }

  onSaveClickLoading() {
    this.items.productSaveTrigger()
        .should('have.class', 'is_loading')
  }

  checkSaveAlert() {
    this.items.savedMessage()
        .should('contain', 'Saved');
  }

  checkSavedForLaterLoginOverlay() {
    this.items.savedForLaterLoginOverlay()
        .should('be.visible');
  }

  checkSavedForLaterLoginModal() {
    this.items.savedForLaterLoginModal()
        .should('be.visible');
  }

  checkEmailPlaceholder() {
    this.items.emailField()
        .should('have.attr', 'placeholder', 'enter your email address');
  }

  checkSubmitButton() {
    this.items.emailSubmit()
        .should('have.class', 'alt_btn')
  }

  checkSubmitButtonHover() {
    this.items.emailSubmit()
        .should('have.css', 'background-color', 'rgb(22, 152, 217)')
        .and('have.css', 'border-bottom', '4px solid rgb(17, 102, 144)')
        .and('have.css', 'top', '-2px');
  }

  checkCloseButton() {
    this.items.loginModalCloseButton()
        .should('be.visible')
        .and('have.text', 'Close X');
  }

  checkProductSavedIcon() {
    this.items.savedIcon()
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(12, 192, 0)')
  }

  checkSaveOnMainImage() {
    this.items.saveOnMainImage()
        .should('have.css', 'display', 'none');
  }
}