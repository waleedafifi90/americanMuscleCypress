import { AccountPageActions } from "./actions";
import { AccountPageTests } from "./tests";

export class AccountPage {
  constructor() {
    this.tests = new AccountPageTests;
    this.actions = new AccountPageActions;
  }
}