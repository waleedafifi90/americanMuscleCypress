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

}