import { CartPageActions } from "./actions";
import { CartPageTests } from "./tests";

export class CartPage {
  constructor() {
    this.tests = new CartPageTests;
    this.actions = new CartPageActions;
  }
}