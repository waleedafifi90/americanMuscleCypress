import { ProductDetailsPageItems } from "./items";

export class ProductetailsPageActions {
  constructor() {
    this.items = new ProductDetailsPageItems;
  }

  saveProductToMyAccount() {
    this.items.productSaveLink()
        .click();
  }

  enterEmail(email) {
    this.items.emailField()
        .type(email);
  }

  clickEnterButton() {
    this.items.emailSubmit()
        .click();
  }

  hoverEnterButton() {
    this.items.emailSubmit()
        .realHover()
        .wait(2000);
  }
}