import { AccountPageItems } from "./items";

export class AccountPageActions {
  constructor() {
    this.items = new AccountPageItems;
  }

  openQuickActionMenu() {
    this.items.accountLinkTrigger()
        .realClick();
  }

  accountQuickAction() {
    this.items.accountQuickAction()
        .then(acc => {
          acc.addClass('open');
        });
  }


  quickActionLinkClick(data) {
    this.items.quickActionLink(data)
        .click();
  }

  quickActionLinkHover(data) {
    this.items.quickActionLink(data)
        .realHover()
        .wait(2000);
  }

  addToCartButtonHover(id) {
    this.items.addToCartButton(id)
        .realHover()
        .wait(2000);
  }

  addToCart() {
    this.items.addToCartButton()
        .click();
  }
}