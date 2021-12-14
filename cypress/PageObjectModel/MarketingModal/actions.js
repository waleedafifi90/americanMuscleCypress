import { MarketingModalItems } from "./items";

export class MarketingModalActions {
  constructor() {
    this.items = new MarketingModalItems();
  }

  closeMarketingModal() {
    this.items.marketingModalCloseButton()
        .click();
  }

}