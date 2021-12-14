/// <reference types="cypress" />

import { CategoryPage } from '../PageObjectModel/CategoryPage/page';
import { HomePage } from '../PageObjectModel/homePage/page';
import { ProductPage } from '../PageObjectModel/ProductPage/page';


describe('American car part scenario', () => {

  const homePage = new HomePage();
  const catPage = new CategoryPage;
  const prodPage = new ProductPage;

  before(() => {
    cy.visit('/')
  })

  context('Verify HomePage element are visible in the right way', () => {
    it('Verify Home page title', () => {
      cy.intercept('https://www.americanmuscle.com/').as('requestWait');
      homePage.tests.checkHomePageVehicleTitle('Choose your Vehicle');
      cy.wait('@requestWait')
    });

    it('Verify Navigating to Camaro shop', () => {
      homePage.tests.checkVehicleContainer();
      homePage.actions.hoverActionOnCarItem('camaro_trigger');
      homePage.tests.checkCarCategoryNameStyleOnHover('camaro_trigger');
      homePage.actions.selectCarType('camaro_trigger');
      homePage.tests.checkCarContainerAfterSelect('Camaro');
      homePage.tests.checkCarContainerTitleAfterSelect('Camaro', 'Choose your Camaro');
      homePage.actions.hoverActionOnCarItem('shop_2016_camaro');
      // homePage.tests.checkCarModelYearNameStyleOnHover('shop_2016_camaro');
      homePage.actions.selectCarItemFromCategory('shop_2016_camaro');
    });
  });

  context('Verify Camaro category', () => {

    it('Verify Category page', () => {
      cy.url().should('contain', 'camaro');
      catPage.tests.checkTabContainerAppear();
      catPage.tests.checkFirstItemStyleOnTheList('camaro');
    });

    it('Verify expand the nested menu on breaks hover', () => {
      catPage.actions.genSelectMenuListItemHover('camaro-brakes');
      catPage.tests.checkListItemBackgroundOnHover('camaro-brakes');
      catPage.tests.checkListItemLinkColorOnHover('camaro-brakes');
      catPage.actions.showNestedMenu('camaro-brakes');
      catPage.tests.checkNestedMenuAppear('camaro-brakes');
      catPage.actions.hoverActionItemNestedMenu('camaro-rotors');
      catPage.actions.chooseItemNestedMenu('camaro-rotors');
    });
  });

  context('Product Page', () => {
    it('Verify Camaro rpducts page', () => {
      prodPage.tests.checBreadCrumb('2016-2022 Camaro Rotors');
      prodPage.tests.checkHeadingTag('2016-2022 Camaro Rotors');
      prodPage.tests.checkFiltersOnLoad();
    });

    it.only('Verify select Brake Rotors and Drums from the filter', () => {
      prodPage.tests.checkAside();
      prodPage.tests.checkFilterVisibleByType('Category');
      prodPage.actions.selectCategoryFilterById('Brake Rotors and Drums');
      prodPage.tests.subCategoryLoading();
      prodPage.tests.checkFilterApplied('Brake Rotors and Drums');
      prodPage.tests.checkFilterNotExistByType('BrakePadMaterial');
    })
  })
})