import { HomeItems } from "./items";

export class HomePageActions {
  constructor() {
    this.items = new HomeItems();
  }

  hoverActionOnCarType(item) {
    this.items.vehicleContainerCarType(item)
        .realHover()
        .wait(1000);
  }

  selectCarType(item) {
    this.items.vehicleContainerCarType(item)
        .click();
  }

  hoverActionOnCarItem(item) {
    this.items.carContainerItemsByType(item)
        .realHover()
        .wait(1000);
  }

  selectCarItemFromCategory(item) {
    this.items.carContainerItemsByType(item)
        .click();
  }
}