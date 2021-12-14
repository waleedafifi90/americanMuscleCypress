import { HomeItems } from "./items";

export class HomePageActions {
  constructor() {
    this.items = new HomeItems();
  }

  selectCarType(item) {
    this.items.vehicleContainerCarType(item)
        .click();
  }
}