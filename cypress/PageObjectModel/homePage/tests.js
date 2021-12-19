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
        .and('contain', title);
  }

  checkCarContainerSubTitleAfterSelect(item, title) {
    this.items.carContainerSubTitleByType(item)
        .should('be.visible')
        .and('contain', title);
  }

  checkCarContainerItemsByType(item) {
    this.items.carContainerItemsByType(item)
        .should('exist');
  }

  checkCarCategoryNameStyleOnHover(item) {
    this.items.carCategorySpanName(item)
        .should('have.css', 'color', 'rgb(245, 130, 31)');
  }

  checkCarModelYearNameStyleOnHover(item) {
    this.items.carModelYearSpanName(item)
        .should('have.css', 'color', 'rgb(245, 130, 31)');
  }

  checkSearchInput(val) {
    this.items.searchInput()
        .invoke('attr', 'placeholder')
        .should('contain', val);
  }
}