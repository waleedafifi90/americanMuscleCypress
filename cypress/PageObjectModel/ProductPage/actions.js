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
        .click({force: true});
  }

  productItemsPrice() {
    this.items.productItemPrice()
        .invoke('text');
  }

  ProductsTotalMatching() {
    return this.items.ProductsTotalMatching()
        .invoke('text');
  }
}