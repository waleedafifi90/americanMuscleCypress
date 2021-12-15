import { CategoryPageItems } from "./items";

export class CategoryPageAction {
  constructor() {
    this.items = new CategoryPageItems();
  }

  genSelectMenuListItemHover(href) {
    this.items.partLinkParentNavigationBar(href)
        .parent()
        .realHover()
        .wait(2000);
  }

  showNestedMenu(href) {
    this.items.partLinkParentNavigationBar(href)
        .next()
        .invoke('show');
  }

  hoverActionItemNestedMenu(href) {
    this.items.partLinkParentNavigationBar(href)
        .realHover();
  }

  chooseItemNestedMenu(href) {
    this.items.partLinkParentNavigationBar(href)
        .click();
  }

  fillMiniPrice(val) {
    this.items.minPrice()
        .type(val);
  }

  fillMaxPrice(val) {
    this.items.maxPrice()
        .type(val);
  }

  priceRangeButtonClick() {
    this.items.priceRangeButton()
        .click();
  }
}