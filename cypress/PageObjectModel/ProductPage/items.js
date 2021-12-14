export class ProductPageItems {
  pageHeadingTitle() {
    return cy.get('h1.gen_category_header');
  }

  aboutCarSection(car) {
    return cy.get(`[data-vehicle-type="${car}"]`);
  }

  aboutCarSectionTitle(car) {
    return cy.get(`[data-vehicle-type="${car}"] span.title`);
  }

  aboutCarSectionOption(car, dataID) {
    return cy.get(`[data-vehicle-type="${car}"] a[data-id="${dataID}"]`);
  }

  aside() {
    return cy.get('aside[data-content-type="Filter"]');
  }

  filtersSections(dataName) {
    return cy.get(`[data-group-name="${dataName}"]`)
  }

  filterLinkByHref(href) {
    return cy.get(`aside a[href*=${href}]`);
  }

  filterLinkByDataId(id) {
    return cy.get(`[data-facet-id='${id}']`)
  }

  filterCounter(href) {
    return cy.get(`aside a[href*=${href}] span.count`);
  }

  chosenFacets() {
    return cy.get(`div.chosen_facets`);
  }

  productCard(carType) {
    return cy.get(`[data-vehicletype=${carType}] li.products_container`)
  }

  sort() {
    return cy.get('[name="sort"]');
  }

  paginiation() {
    return cy.get('nav.pagination');
  }

  breadCrumb() {
    return cy.get('ul.breadcrumbs');
  }

  subCategoryContainer() {
    return cy.get('section.subcategory_landing');
  }
}