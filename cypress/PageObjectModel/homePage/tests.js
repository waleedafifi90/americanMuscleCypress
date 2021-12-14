import { HomeItems } from "./items";

export class HomePageTests {
  constructor() {
    this.items = new HomeItems();
  }

  checkHomePageVehicleTitle(title) {
    this.items.vehicleContainerTitle()
        .should('contain', title)
  }

  checkVehicleContainer() {
    this.items.vehicleContainerCarNavigation()
        .should('exist')
        .and('have.length.at.least', 1);
  }

  checkCarTypeExists(item) {
    this.items.vehicleContainerCarType(item)
        .should('be.visible');
  }

  checkCarContainerAfterSelect(item) {
    this.items.carContainerByType(item)
        .should('be.visible');
  }

  checkCarContainerTitleAfterSelect(item, title) {
    this.items.carContainerTitleByType(item)
        .should('be.visible')
        .and('have.value', title);
  }

  checkCarContainerItemsByType(item) {
    this.items.carContainerItemsByType(item)
        .should('exist');
  }


}