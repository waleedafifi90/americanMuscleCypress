import { CartPageItems } from "./items";

export class CartPageActions {
  constructor() {
    this.items = new CartPageItems;
  }

  changeProductQuantity() {
    this.items.cartListItemProductQuantityButton()
        .click();
  }

  selectQuantityValue(val) {
    this.items.cartListItemProductQuantityListItem(val)
        .click();
  }

  cartContainerTrigger() {
    this.items.cartContainer().then(cart => {
          cart.trigger('mouseover');
        });
  }

  miniCartContainer() {
    this.items.miniCartContainer()
        .then(cart => {
          cart.addClass('open');
        });
  }

  monthlyPayment() {
    this.items.monthlyPayment()
        .invoke('text');
  }
}