import { CategoryPageItems } from "./items";

export class CategoryPageTests {
  constructor() {
    this.items = new CategoryPageItems;
  }

  checkTabContainerAppear() {
    this.items.tabContainer()
        .should('be.visible');
  }

  checkFirstItemStyleOnTheList(cat) {
    this.items.tabContainerListItem(cat)
        .should('have.class', `shop_${cat}`)
  }

  checkNestedMenuAppear(href) {
    this.items.partLinkParentNavigationBar(href)
    .next()
    .should('be.visible');
  }

  checkListItemBackgroundOnHover(href) {
    this.items.partLinkParentNavigationBar(href)
        .parent()
        .should('have.css', 'background-color', 'rgb(255, 255, 255)');
  }

  checkListItemLinkColorOnHover(href) {
    this.items.partLinkParentNavigationBar(href)
        .should('have.css', 'color', 'rgb(24, 145, 205)');
  }

  checkMiniPrice(val) {
    this.items.minPrice()
        .should('be.visible')
        .and('have.value', val)
  }

  checkMaxPrice(val) {
    this.items.maxPrice()
        .should('be.visible')
        .and('have.value', val)
  }

  checkPriceRangeButton() {
    this.items.priceRangeButton()
        .should('contain', 'Go')
        .and('have.css', 'color', 'rgb(24, 145, 205)');
  }

  marketingInitiative(text) {
    this.items.marketingInitiative()
        .should('be.visible')
        .and('contain', text);
  }

  sectionHeadLine(val) {
    this.items.sectionHeadLine()
        .should('be.visible')
        .and('contain', val)
  }

  popularCategoryItems(val) {
    this.items.popularCategoryItems()
        .should('be.visible')
        .and('contain', val)
  }

  toaster(val) {
    this.items.toaster()
        .should('be.visible')
        .and('contain', val)
  }

  footerHeadLine(val) {
    this.items.footerHeadLine()
        .should('be.visible')
        .and('contain', val)
  }

  footerVehilceLinks(val) {
    this.items.footerVehilceLinks()
        .should('be.visible')
        .and('contain', val)
  }

  footerConnect(val) {
    this.items.footerConnect()
        .should('be.visible')
        .and('contain', val)
  }

  callout(val) {
    this.items.callout()
        .should('be.visible')
        .and('contain', val)
  }

  generationYears(val) {
    this.items.generationYears()
        .should('be.visible')
        .and('contain', val)
  }

  bannerHeroMenu(val) {
    this.items.bannerHeroMenu()
        .should('be.visible')
        .and('contain', val)
  }
}