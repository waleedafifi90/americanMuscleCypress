import { ProductetailsPageActions } from "./actions";
import { ProductPageDetailsTests } from "./tests";
export class ProductDetailsPage {
  constructor() {
    this.tests = new ProductPageDetailsTests;
    this.actions = new ProductetailsPageActions;
  }
}