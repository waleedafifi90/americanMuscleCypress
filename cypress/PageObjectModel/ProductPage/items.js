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

  filterCounter(id) {
    return cy.get(`aside a[data-facet-id='${id}'] span.count`);
  }

  filtersSectionsCounter(dataName) {
    return cy.get(`[data-group-name="${dataName}"] span.count`)
  }

  chosenFacets() {
    return cy.get(`div.chosen_facets`);
  }

  productCard(carType) {
    return cy.get(`[data-vehicletype=${carType}] li.products_container`)
  }

  firstProductCard(carType) {
    return cy.get(`[data-vehicletype=${carType}] li.product_container`).first();
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

  productRating() {
    return cy.get('span[class*="sc-eCstlR"]');
  }

  productItemPrice() {
    return cy.get('li.product_container [data-qatgt="price"]');
  }

  aboutCarFilter() {
    return cy.get('aside section.about_your_camaro');
  }

  aboutCartFilterSummaryTitle() {
    return cy.get('aside section.about_your_camaro .summary .title .vehicle_type');
  }

  aboutCartFilterSummaryColor() {
    return cy.get('aside section.about_your_camaro .summary span[data-fitment-group="Color"]');
  }

  ProductsTotalMatching() {
    return cy.get('span.total_matching');
  }
}