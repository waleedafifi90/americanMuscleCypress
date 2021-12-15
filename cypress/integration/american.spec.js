/// <reference types="cypress" />

import { AccountPage } from '../PageObjectModel/AccountPage/page';
import { CartPage } from '../PageObjectModel/CartPage/page';
import { CategoryPage } from '../PageObjectModel/CategoryPage/page';
import { HomePage } from '../PageObjectModel/homePage/page';
import { ProductPage } from '../PageObjectModel/ProductPage/page';
import { ProductDetailsPage } from '../PageObjectModel/ProductPageDetails/page';
import { Utils } from '../PageObjectModel/utils';

describe('American car part scenario', () => {

  const homePage = new HomePage();
  const catPage = new CategoryPage;
  const prodPage = new ProductPage;
  const prodDetails = new ProductDetailsPage;
  const accPage = new AccountPage;
  const cartPage = new CartPage;
  const utils = new Utils;

  const url = 'https://www.americanmuscle.com/ajax/SubCatProductPaging';

  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.marketingModal();
    cy.fixture("product").then(prod => { return prod; }).as('product');
    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true;
      }
    });
  })

  context('Verify HomePage element are visible in the right way', () => {
    it('Verify Home page title', () => {
      homePage.tests.checkHomePageVehicleTitle('Choose your Vehicle');
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

    it('Verify about car section', () => {
      prodPage.tests.checkAboutCarSection('camaro');
      cy.marketingModal();
      prodPage.tests.checkAboutCarSectionOptions('camaro', 2021);
      prodPage.tests.checkAboutCarSectionTitle('camaro', 'Your Camaro Year?');
    });

    it('Verify select Brake Rotors and Drums from the filter', () => {
      cy.intercept('post', url).as('filterCheck');
      prodPage.tests.checkAside();
      prodPage.tests.checkFilterVisibleByType('Category');
      prodPage.actions.selectCategoryFilterById('Brake Rotors and Drums');
      prodPage.tests.subCategoryLoading();
      cy.wait('@filterCheck');
      prodPage.tests.checkFilterApplied('Brake Rotors and Drums');
      prodPage.tests.checkFilterNotExistByType('BrakePadMaterial');
    });

    it('Verify change price range', () => {
      cy.intercept('post', url).as('priceCheck');
      catPage.actions.fillMiniPrice(120);
      catPage.tests.checkMiniPrice(120);
      catPage.actions.fillMaxPrice(290);
      catPage.tests.checkMaxPrice(290);
      catPage.tests.checkPriceRangeButton();
      catPage.actions.priceRangeButtonClick();
      cy.wait('@priceCheck');
      prodPage.tests.productItemsPrice().then(ele => {
        const priceArray = ele.map((index, el) =>  Cypress.$(el).text().substring(1).trim()).get();
        let between = priceArray.filter(function(item) {
          return !!(item >= 120 && item <= 290);
        });

        cy.log(between);

        expect(between).to.deep.equal(priceArray)
      })
    })

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
      cy.intercept('post', '/myaccountbuildlist/GetBuildLists').as('createBuildList');
      prodDetails.actions.saveProductToMyAccount();
      prodDetails.tests.checkSavedForLaterLoginOverlay();
      prodDetails.tests.checkSavedForLaterLoginModal();
      prodDetails.tests.checkEmailPlaceholder();
      prodDetails.tests.checkSubmitButton();
      prodDetails.actions.enterEmail('waleed.tester@test.com');
      // prodDetails.actions.hoverEnterButton();
      // prodDetails.tests.checkSubmitButtonHover();
      prodDetails.actions.clickEnterButton();
      prodDetails.tests.checkSaveAlert();
      cy.wait('@createBuildList')
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
      cy.intercept('post', 'https://www.americanmuscle.com/myaccountbuildlist/AddToCart').as('addToCart');
      accPage.tests.checkAccountPageHeading();
      accPage.tests.checkAccountPageSteps();
      accPage.tests.checkAccountPageStepsItem('myaccountbuildlist', 'Saved for Later');
      accPage.tests.productName(this.product.productName)
      accPage.tests.productPrice(this.product.price);
      // accPage.tests.checkStock();
      // accPage.actions.addToCartButtonHover('731318');
      // accPage.tests.checkAddToCartStyle('731318');
      accPage.actions.addToCart();
      cy.wait('@addToCart');
    });
  });

  context('Cart Page', function() {
    it('Verify Navigating to Cart Page', () => {
      cartPage.tests.pageTitle();
    });

    it('Verify Cart List', function() {
      cartPage.tests.checkCartListVisiblity();
      cartPage.tests.checkFirstItemName(this.product.productName);
      cartPage.tests.checkFirstItemPrice(this.product.price);
      cartPage.tests.checkFirstItemQuantity(1);
      cartPage.tests.checkFirstItemSubPrice(utils.totalPrice(this.product.price, 1));
      cartPage.tests.checkCartSummarySubTotal(utils.totalPrice(this.product.price, 1));
      cartPage.tests.checkCartSummaryTotal(utils.totalPrice(this.product.price, 1));
    });

    it('Verify Change product quantity', function() {
      cy.intercept('POST', 'https://www.americanmuscle.com/ajax/UpdateLineItemQuantity').as('changeQty');
      cartPage.actions.changeProductQuantity();
      cartPage.actions.selectQuantityValue(11);
      cartPage.tests.checkFirstItemQuantity(11);
      cartPage.tests.checkFirstItemSubPrice(utils.totalPrice(this.product.price, 11));
      cartPage.tests.checkCartSummarySubTotal(utils.totalPrice(this.product.price, 11));
      cartPage.tests.checkCartSummaryTotal(utils.totalPrice(this.product.price, 11));
      cy.wait('@changeQty');
    });

    it('Verify Mini cart quantity changed', () => {
      cy.request('post', 'https://www.americanmuscle.com/ajax/GetMiniCart');
      cartPage.tests.checkCartCount(11);
      cartPage.actions.cartContainerTrigger();
      cartPage.tests.miniCartContainer();

    });
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  })

})