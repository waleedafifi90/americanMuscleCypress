export class CategoryPageItems {
  tabContainer() {
    return cy.get('section.tabs_container');
  }

  tabContainerListItem(item) {
    return cy.get(`[data-vfw-vehicletype="${item}"]`);
  }

  partLinkParentNavigationBar(href) {
    return cy.get(`ul.nav_first_tier a[href*="${href}"]`);
  }

  sectionHeadLine() {
    return cy.get('h2.headline');
  }

  popularCategoryItems() {
    return cy.get('section.popular_categories li a');
  }

  toaster() {
    return cy.get('div.toaster');
  }

  footerHeadLine() {
    return cy.get('footer h4');
  }

  footerVehilceLinks() {
    return cy.get('footer div.vehicle_links a');
  }

  footerConnect() {
    return cy.get('footer div.connect');
  }

  callout() {
    return cy.get('div.callout');
  }

  generationYears() {
    return cy.get('h2.generation_years_text')
  }

  bannerHeroMenu() {
    return cy.get('div.hero_menu');
  }

  minPrice() {
    return cy.get('div.price_range input.min_price')
  }

  maxPrice() {
    return cy.get('div.price_range input.max_price')
  }

  priceRangeButton() {
    return cy.get('div.price_range button')
  }

  marketingInitiative() {
    return cy.get('.marketing_initiative');
  }
}