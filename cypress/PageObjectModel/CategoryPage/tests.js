import { CategoryPageItems } from "./items";

export class CategoryPageTests {
  constructor() {
    this.items = new CategoryPageItems;
  }

  checkTabContainerAppear() {
    this.items.tabContainer()
        .should('be.visible');
  }

  checkFirstItemStyleOnTheList(cat) {
    this.items.tabContainerListItem(cat)
        .should('have.class', `shop_${cat}`)
  }

  checkNestedMenuAppear(href) {
    this.items.partLinkParentNavigationBar(href)
    .next()
    .should('be.visible');
  }

  checkListItemBackgroundOnHover(href) {
    this.items.partLinkParentNavigationBar(href)
        .parent()
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
  }

  checkListItemLinkColorOnHover(href) {
    this.items.partLinkParentNavigationBar(href)
        .should('have.css', 'color', 'rgb(24, 145, 205)');
  }

  checkMiniPrice(val) {
    this.items.minPrice()
        .should('be.visible')
        .and('have.value', val)
  }

  checkMaxPrice(val) {
    this.items.maxPrice()
        .should('be.visible')
        .and('have.value', val)
  }

  checkPriceRangeButton() {
    this.items.priceRangeButton()
        .should('contain', 'Go')
        .and('have.css', 'color', 'rgb(24, 145, 205)');
  }

  marketingInitiative(text) {
    this.items.marketingInitiative()
        .should('be.visible')
        .and('contain', text);
  }
}