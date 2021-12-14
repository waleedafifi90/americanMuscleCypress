import { ProductPageActions } from "./actions";
import { ProductPageTests } from "./tests";

export class ProductPage {
  constructor() {
    this.tests = new ProductPageTests;
    this.actions = new ProductPageActions;
  }
}