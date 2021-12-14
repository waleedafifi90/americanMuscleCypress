export class HomeItems {
  vehicleContainerTitle() {
    return cy.get('div.vehicle_select_container h2');
  }

  vehicleContainerCarNavigation() {
    return cy.get('div.vehicle_select_container nav');
  }
  
  vehicleContainerCarType(item) {
    return cy.get(`div.vehicle_select_container [data-qatgt="${item}"]`);
  }

  carContainerByType(item) {
    return cy.get(`div.vehicle_select_container div[data-vehicle-type="${item}"]`);
  }

  carContainerTitleByType(item) {
    return cy.get(`div.vehicle_select_container div[data-vehicle-type="${item}"] h2`);
  }

  carContainerItemsByType(item) {
    return cy.get(`div.vehicle_select_container a[data-qatgt="${item}"]`);
  }
}