import { CategoryPageItems } from "./items";

export class CategoryPageTests {
  constructor() {
    this.items = new CategoryPageItems;
  }

  checkNestedMenuAppear(href) {
    this.items.partLinkParentNavigationBar(href)
    .next()
    .should('be.visible');
  }
}