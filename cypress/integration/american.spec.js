/// <reference types="cypress" />

import { AccountPage } from '../PageObjectModel/AccountPage/page';
import { CartPage } from '../PageObjectModel/CartPage/page';
import { CategoryPage } from '../PageObjectModel/CategoryPage/page';
import { HomePage } from '../PageObjectModel/homePage/page';
import { ProductPage } from '../PageObjectModel/ProductPage/page';
import { ProductDetailsPage } from '../PageObjectModel/ProductPageDetails/page';


describe('American car part scenario', () => {

  const homePage = new HomePage();
  const catPage = new CategoryPage;
  const prodPage = new ProductPage;
  const prodDetails = new ProductDetailsPage;
  const accPage = new AccountPage;
  const cartPage = new CartPage;

  const url = 'https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums&sort=Customer%20Rating';

  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.marketingModal();
    cy.fixture("product").then(prod => { return prod; }).as('product');
  })

  context('Verify HomePage element are visible in the right way', () => {
    it('Verify Home page title', () => {
      // cy.intercept('https://www.americanmuscle.com/').as('requestWait');
      homePage.tests.checkHomePageVehicleTitle('Choose your Vehicle');
      // cy.wait('@requestWait')
    });

    it('Verify Navigating to Camaro shop', () => {
      homePage.tests.checkVehicleContainer();
      // homePage.actions.hoverActionOnCarItem('camaro_trigger');
      // homePage.tests.checkCarCategoryNameStyleOnHover('camaro_trigger');
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
    it('Verify Camaro product page', () => {
      prodPage.tests.checBreadCrumb('2016-2022 Camaro Rotors');
      prodPage.tests.checkHeadingTag('2016-2022 Camaro Rotors');
      prodPage.tests.checkFiltersOnLoad();
    });

    it('Verify select Brake Rotors and Drums from the filter', () => {
      prodPage.tests.checkAside();
      prodPage.tests.checkFilterVisibleByType('Category');
      prodPage.actions.selectCategoryFilterById('Brake Rotors and Drums');
      // prodPage.tests.subCategoryLoading();
      prodPage.tests.checkFilterApplied('Brake Rotors and Drums');
      prodPage.tests.checkFilterNotExistByType('BrakePadMaterial');
    });

    it('Verify Soring the list be Customer rating', () => {
      // cy.intercept('GET', url).as('sortingRequest');
      prodPage.actions.sorting('Customer Rating');
      prodPage.tests.subCategoryLoading();
      // cy.wait('@sortingRequest', {timeout: 15000});
      cy.wait(5000);
      prodPage.tests.productRating().then(rate => {
        const unsortedItems = rate.map((index, el) =>  Cypress.$(el).text().trim()).get();
        const sortedItems = unsortedItems.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
        expect(sortedItems, 'Items are sorted').to.deep.equal(unsortedItems);
      });
    });

    it('Verify saving the first item on the list', () => {
      prodPage.tests.firstProductCard('Camaro').then( ele => {
        cy.writeFile('cypress/fixtures/product.json', {
          'href': `${ele.find('div.sc-fFucqa a').attr('href')}`,
          'productName': `${ele.find('div.sc-fFucqa a').text()}`,
          'rate': `${ele.find('span.sc-eCstlR').text()}`,
          'description': `${ele.find('p.sc-gKseQn').text()}`,
          'price': `${ele.find('[data-qatgt="price"]').text()}`
        });
      })
    });

    it('Verify navigating to product details page', function() {
      prodPage.actions.firstProductCard('Camaro');
      // cy.fixture("product").then(prod => {
        prodDetails.tests.checkProductName(this.product.productName);
        prodDetails.tests.checkSubTitle(this.product.description);
        prodDetails.tests.checkProductPrice(this.product.price);
        prodDetails.tests.checkReviewCount(this.product.rate.replace(/[()]/g, ''));
      // })
      prodDetails.tests.checkStockStatus();
      // prodDetails.tests.checkDeliveryStatus('FREE Shipping');
    });

    it('Verify Adding the product to the saved products list for test email', () => {
      prodDetails.actions.saveProductToMyAccount();
      prodDetails.tests.checkSavedForLaterLoginOverlay();
      prodDetails.tests.checkSavedForLaterLoginModal();
      prodDetails.tests.checkEmailPlaceholder();
      prodDetails.tests.checkSubmitButton();
      prodDetails.actions.enterEmail('waleed.rr@test.com');
      // prodDetails.actions.hoverEnterButton();
      // prodDetails.tests.checkSubmitButtonHover();
      prodDetails.actions.clickEnterButton();
      prodDetails.tests.checkSaveAlert();
    });
  });

  context('Account Page', () => {
    it('Verify Navigating to account page from My Account Mini Nav', () => {
      accPage.actions.openQuickActionMenu();
      // accPage.actions.quickActionContainerShowTrigger();
      accPage.tests.checkQiuckActionVisiblity();
      // accPage.actions.quickActionLinkHover('header_sfl');
      // accPage.tests.quickActionLinkStyle('header_sfl');
      accPage.actions.quickActionLinkClick('header_sfl');
    });

    it('Verify Saved for later page', function() {
      accPage.tests.checkAccountPageHeading();
      accPage.tests.checkAccountPageSteps();
      accPage.tests.checkAccountPageStepsItem('myaccountbuildlist', 'Saved for Later');
      accPage.tests.productName(this.product.productName)
      accPage.tests.productPrice(this.product.price);
      accPage.tests.checkStock();
      // accPage.actions.addToCartButtonHover('731318');
      // accPage.tests.checkAddToCartStyle('731318');
      accPage.actions.addToCart();
    });
  });

  context('Cart Page', function() {
    it('Verify Navigating to Cart Page', () => {
      cartPage.tests.pageTitle();
    });
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  })

})