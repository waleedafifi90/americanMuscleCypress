import { HomePageActions } from "./actions";
import { HomePageTests } from "./tests";

export class HomePage {
  constructor() {
    this.actions = new HomePageActions();
    this.tests = new HomePageTests();
  }
}