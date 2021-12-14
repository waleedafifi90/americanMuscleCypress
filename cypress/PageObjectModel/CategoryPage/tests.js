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
}