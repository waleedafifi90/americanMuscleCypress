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
}