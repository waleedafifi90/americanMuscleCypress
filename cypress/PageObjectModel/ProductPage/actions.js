import { ProductPageItems } from "./items";

export class ProductPageActions {
  constructor() {
    this.items = new ProductPageItems;
  }

  selectCategoryFilterById(id) {
    this.items.filterLinkByDataId(id)
        .click();
  }

  sorting(value) {
    this.items.sort()
        .select(value);
  }

  productRating() {
    this.items.productRating().invoke('text');
  }

  firstProductCard(carType) {
    return this.items.firstProductCard(carType).click();
  }

  selectCarOption(car, data) {
    this.items.aboutCarSectionOption(car, data)
        .click();
  }

  productItemsPrice() {
    this.items.productItemPrice()
        .invoke('text');
  }
}