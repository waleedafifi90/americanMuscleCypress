import { ProductPageItems } from "./items";

export class ProductPageTests {
  constructor() {
    this.items = new ProductPageItems;
  }
  // Each filter change
  subCategoryLoading() {
    this.items.subCategoryContainer()
        .should('have.class', 'new_loader');
  }

  checBreadCrumb(text) {
    this.items.breadCrumb()
        .should('contain', text);
  }

  checkHeadingTag(text) {
    this.items.pageHeadingTitle()
        .should('have.text', text)
  }

  checkAside() {
    this.items.aside()
        .should('be.visible');
  }

  checkFilterVisibleByType(dataName) {
    this.items.filtersSections(dataName)
        .should('exist')
        .and('have.descendants', 'a');
  }

  checkFilterNotExistByType(dataName) {
    this.items.filtersSections(dataName)
        .should('not.exist');
  }

  checkFiltersOnLoad() {
    this.items.chosenFacets()
        .should('be.empty');
  }

  checkFilterApplied(filter) {
    this.items.chosenFacets()
        .should('contain', filter);
  }

  productRating() {
    return this.items.productRating()
        .should('exist');
  }

  firstProductCard(carType) {
    return this.items.firstProductCard(carType);
  }

  checkAboutCarSection(data) {
    this.items.aboutCarSection(data).should('be.visible');
  }

  checkAboutCarSectionTitle(car, data) {
    this.items.aboutCarSectionTitle(car).should('contain', data);
  }

  checkAboutCarSectionOptions(car, data) {
    this.items.aboutCarSectionOption(car, data).should('be.visible');
  }

  productItemsPrice() {
    return this.items.productItemPrice()
        .should('exist');
  }

  aboutCarFilter() {
    this.items.aboutCarFilter()
        .should('be.visible');
  }

  aboutCartFilterSummaryTitle(val) {
    this.items.aboutCartFilterSummaryTitle()
        .should('contain', val);
  }

  aboutCartFilterSummaryColor(color) {
    this.items.aboutCartFilterSummaryColor()
        .should('contain', color)
  }

  ProductsTotalMatching(val) {
    this.items.ProductsTotalMatching()
        .should('equal', val);
  }

  filterCounter(href, val) {
    this.items.filterCounter(href)
        .should('contain', val);
  }
}