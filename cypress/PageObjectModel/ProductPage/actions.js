import { ProductPageItems } from "./items";

export class ProductPageActions {
  constructor() {
    this.items = new ProductPageItems;
  }

  selectCategoryFilterById(id) {
    this.items.filterLinkByDataId(id)
        .click();
  }
}