import { CategoryPageAction } from "./actions";
import { CategoryPageTests } from "./tests";

export class CategoryPage {
  constructor() {
    this.actions = new CategoryPageAction();
    this.tests = new CategoryPageTests;
  }
}