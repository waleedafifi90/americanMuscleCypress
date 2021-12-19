/// <reference types="cypress" />

import { AccountPage } from '../PageObjectModel/AccountPage/page';
import { CartPage } from '../PageObjectModel/CartPage/page';
import { CategoryPage } from '../PageObjectModel/CategoryPage/page';
import { HomePage } from '../PageObjectModel/homePage/page';
import { ProductPage } from '../PageObjectModel/ProductPage/page';
import { ProductDetailsPage } from '../PageObjectModel/ProductPageDetails/page';
import { Utils } from '../PageObjectModel/utils';

describe('American car part scenario', function() {

  const homePage = new HomePage();
  const catPage = new CategoryPage;
  const prodPage = new ProductPage;
  const prodDetails = new ProductDetailsPage;
  const accPage = new AccountPage;
  const cartPage = new CartPage;
  const utils = new Utils;

  const url = 'https://www.americanmuscle.com/ajax/SubCatProductPaging';

  before(function() {
    cy.visit('/')
  });

  beforeEach(function() {
    cy.marketingModal();
    cy.fixture("product").then(prod => { return prod; }).as('product');
    cy.fixture("example").then(data => { return data; }).as('data');

    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true;
      }
    });
  });

  this.afterEach(() => {
    cy.marketingModal();
  });

  context('Home page', function() {
    it('Verify Home page title', function() {
      homePage.tests.checkHomePageVehicleTitle(this.data.homePageVehicleTitle);
      homePage.tests.checkSearchInput(this.data.searchPlaceholder);
    });

    it('Verify Navigating to Camaro shop', function() {
      homePage.tests.checkVehicleContainer();
      homePage.actions.hoverActionOnCarItem('camaro_trigger');
      // homePage.tests.checkCarCategoryNameStyleOnHover('camaro_trigger');
      homePage.actions.selectCarType(this.data.selectCarType);
      homePage.tests.checkCarContainerAfterSelect(this.data.camaro);
      homePage.tests.checkCarContainerTitleAfterSelect(this.data.camaro, this.data.camaroTitle);
      homePage.tests.checkCarContainerSubTitleAfterSelect(this.data.camaro, this.data.camaro);

      utils.checkUrl(this.data.camaro.toLowerCase());
      homePage.tests.checkSearchInput(this.data.camaro);
      
      homePage.actions.hoverActionOnCarItem(this.data.shopCarItem);
      // homePage.tests.checkCarModelYearNameStyleOnHover('shop_2016_camaro');
      homePage.actions.selectCarItemFromCategory(this.data.shopCarItem);
    });
  });

  context('Camaro category', function() {

    it('Verify Category page', function() {
      cartPage.tests.checkCartCount(this.data.defaultCartCountOnLoad);
      utils.checkUrl('camaro-accessories-parts');
      catPage.tests.marketingInitiative(this.data.camaro);
      catPage.tests.checkTabContainerAppear();
      catPage.tests.checkFirstItemStyleOnTheList(this.data.camaro.toLowerCase());
      catPage.tests.sectionHeadLine(this.data.camaroYear);
      catPage.tests.popularCategoryItems(this.data.camaro);
      // catPage.tests.toaster(this.data.camaro);
      catPage.tests.footerHeadLine(this.data.camaro);
      catPage.tests.footerVehilceLinks(this.data.camaro);
      catPage.tests.footerConnect(this.data.camaro);
      catPage.tests.callout(this.data.camaro);
      // catPage.tests.generationYears(this.data.year);
      catPage.tests.bannerHeroMenu(this.data.camaroYear);
    });

    it('Verify expand the nested menu on breaks hover', function() {
      catPage.actions.genSelectMenuListItemHover(this.data.camaroBrakes);
      catPage.tests.checkListItemBackgroundOnHover(this.data.camaroBrakes);
      catPage.tests.checkListItemLinkColorOnHover(this.data.camaroBrakes);
      catPage.actions.showNestedMenu(this.data.camaroBrakes);
      catPage.tests.checkNestedMenuAppear(this.data.camaroBrakes);
      catPage.actions.hoverActionItemNestedMenu(this.data.camarRotors);
      catPage.actions.chooseItemNestedMenu(this.data.camarRotors);
    });
  });

  context('Product Page', function() {
    it('Verify Camaro product page', function() {
      utils.checkUrl('camaro-rotors');

      prodPage.tests.checBreadCrumb(this.data.breadCrumb);
      prodPage.tests.checkHeadingTag(this.data.breadCrumb);
      prodPage.tests.checkFiltersOnLoad();
    });

    it('Verify about car section', function() {
      prodPage.tests.checkAboutCarSection(this.data.camaro.toLowerCase());

      prodPage.tests.checkAboutCarSectionOptions(this.data.camaro.toLowerCase(), this.data.year);
      prodPage.tests.checkAboutCarSectionTitle(this.data.camaro.toLowerCase(), this.data.aboutYearTitle);
      prodPage.actions.selectCarOption(this.data.camaro.toLowerCase(), this.data.year);

      prodPage.tests.checkAboutCarSectionOptions(this.data.camaro.toLowerCase(), this.data.colorID);
      prodPage.tests.checkAboutCarSectionTitle(this.data.camaro.toLowerCase(), this.data.camaroColor);
      prodPage.actions.selectCarOption(this.data.camaro.toLowerCase(), this.data.colorID);

      cy.marketingModal();

      prodPage.tests.checkAboutCarSectionOptions(this.data.camaro.toLowerCase(), this.data.modelID);
      prodPage.tests.checkAboutCarSectionTitle(this.data.camaro.toLowerCase(), this.data.camaroSubmodel);
      prodPage.actions.selectCarOption(this.data.camaro.toLowerCase(), this.data.modelID);

      prodPage.tests.aboutCarFilter();
      prodPage.tests.aboutCartFilterSummaryColor(this.data.colorName);
      // prodPage.tests.aboutCartFilterSummaryTitle(`${this.data.year} ${this.data.camaro} ${this.data.subModel}`);
      prodPage.tests.aboutCartFilterSummaryTitle(this.data.camaro);
    });

    it('Verify select Brake Rotors and Drums from the filter', function() {
      cy.intercept('post', url).as('filterCheck');
      prodPage.tests.checkAside();
      prodPage.tests.checkFilterVisibleByType(this.data.category);
      prodPage.actions.selectCategoryFilterById(this.data.brakeRotorsAndDrums);
      prodPage.tests.subCategoryLoading();
      cy.wait('@filterCheck');
      prodPage.tests.checkFilterApplied(this.data.brakeRotorsAndDrums);
      prodPage.tests.checkFilterNotExistByType(this.data.brakePadMaterial);
      prodPage.actions.ProductsTotalMatching().then(text => {
        prodPage.tests.filterCounter(this.data.brakeRotorsAndDrums, text);
      })

      prodPage.actions.filtersSectionsCounter(this.data.RotorLocation).then(val => {
        prodPage.tests.filterCounter(this.data.brakeRotorsAndDrums, val);
      })
    });

    it('Verify change price range', function() {
      cy.intercept('post', url).as('priceCheck');
      catPage.actions.fillMiniPrice(this.data.miniPrice);
      catPage.tests.checkMiniPrice(this.data.miniPrice);
      catPage.actions.fillMaxPrice(this.data.maxPrice);
      catPage.tests.checkMaxPrice(this.data.maxPrice);
      catPage.tests.checkPriceRangeButton();
      catPage.actions.priceRangeButtonClick();
      cy.wait('@priceCheck');
      // cy.wait(2000);      
      prodPage.tests.productItemsPrice().then(ele => {
        const priceArray = ele.map((index, el) =>  Cypress.$(el).text().substring(1).trim()).get();
        let between = priceArray.filter(function(item) {
          return (item >= 120 && item <= 290);
        });

        cy.log(between);

        expect(between).to.deep.equal(priceArray)
      })
    })

    it('Verify Soring the list be Customer rating', function() {
      // cy.intercept('GET', url).as('sortingRequest');
      prodPage.actions.sorting(this.data.customerRating);
      prodPage.tests.subCategoryLoading();
      // cy.wait('@sortingRequest');
      cy.wait(2000);
      prodPage.tests.productRating().then(rate => {
        const unsortedItems = rate.map((index, el) =>  Cypress.$(el).text().trim()).get();
        const sortedItems = unsortedItems.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
        expect(sortedItems, 'Items are sorted').to.deep.equal(unsortedItems);
      });
    });

    it('PreCondition saving the first item on the list', function() {
      prodPage.tests.firstProductCard(this.data.camaro).then( ele => {
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
      prodPage.actions.firstProductCard(this.data.camaro);
      // cy.fixture("product").then(prod => {
      
      // utils.checkUrl(this.product.href);

        prodDetails.tests.checkProductName(this.product.productName);
        prodDetails.tests.checkSubTitle(this.product.description);
        prodDetails.tests.checkProductPrice(this.product.price);
        prodDetails.tests.checkReviewCount(this.product.rate.replace(/[()]/g, ''));
      // })
      prodDetails.tests.checkStockStatus();
      // prodDetails.tests.checkDeliveryStatus('FREE Shipping');
    });

    it('Verify Adding the product to the saved products list for test email', function() {
      cy.intercept('post', '/myaccountbuildlist/GetBuildLists').as('createBuildList');
      prodDetails.actions.saveProductToMyAccount();
      // prodDetails.tests.checkSavedForLaterLoginOverlay();
      prodDetails.tests.checkSavedForLaterLoginModal();
      prodDetails.tests.checkEmailPlaceholder();
      prodDetails.tests.checkSubmitButton();
      prodDetails.actions.enterEmail(this.data.email);
      prodDetails.actions.hoverEnterButton();
      prodDetails.tests.checkSubmitButtonHover();
      prodDetails.actions.clickEnterButton();
      prodDetails.tests.checkSaveAlert();
      cy.wait('@createBuildList');
      cy.wait(2000);
    });
  });

  context('Account Page', function() {
    it('Verify Navigating to account page from My Account Mini Nav', function() {
      // accPage.actions.openQuickActionMenu();
      accPage.actions.accountQuickAction();
      // accPage.actions.quickActionContainerShowTrigger();
      accPage.tests.checkQiuckActionVisiblity();
      // accPage.actions.quickActionLinkHover('header_sfl');
      // accPage.tests.quickActionLinkStyle('header_sfl');
      accPage.actions.quickActionLinkClick(this.data.headerSfl);
    });

    it('Verify Saved for later page', function() {
      utils.checkUrl('saved-for-later');
      cy.intercept('post', 'https://www.americanmuscle.com/myaccountbuildlist/AddToCart').as('addToCart');
      accPage.tests.checkAccountPageHeading();
      accPage.tests.checkAccountPageSteps();
      accPage.tests.checkAccountPageStepsItem(this.data.myAccountBuildList, this.data.saveForLater);
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
    it('Verify Navigating to Cart Page', function() {
      utils.checkUrl('shopping-cart');
      cartPage.tests.pageTitle();
    });

    it('Verify Cart List', function() {
      cartPage.tests.checkCartListVisiblity();
      cartPage.tests.checkFirstItemName(this.product.productName);
      cartPage.tests.checkFirstItemPrice(this.product.price);
      cartPage.tests.checkFirstItemQuantity(this.data.defaultCartCount);
      cartPage.tests.checkFirstItemSubPrice(utils.totalPrice(this.product.price, this.data.defaultCartCount));
      cartPage.tests.checkCartSummarySubTotal(utils.totalPrice(this.product.price, this.data.defaultCartCount));
      cartPage.tests.checkCartSummaryTotal(utils.totalPrice(this.product.price, this.data.defaultCartCount));
    });

    it('Verify Change product quantity', function() {
      cy.intercept('POST', 'https://www.americanmuscle.com/ajax/UpdateLineItemQuantity').as('changeQty');
      cartPage.tests.monthlyPayment(this.data.defaultMonthlyPayment);
      cartPage.actions.changeProductQuantity();
      cartPage.actions.selectQuantityValue(this.data.quntityMax);
      cartPage.tests.checkFirstItemQuantity(this.data.quntityMax);
      cartPage.tests.checkFirstItemSubPrice(utils.totalPrice(this.product.price, this.data.quntityMax));
      cartPage.tests.checkCartSummarySubTotal(utils.totalPrice(this.product.price, this.data.quntityMax));
      cartPage.tests.checkCartSummaryTotal(utils.totalPrice(this.product.price, this.data.quntityMax));
      cy.wait('@changeQty');
    });

    it('Verify Mini cart quantity changed', function() {
      cy.reload();
      cartPage.tests.checkCartCount(this.data.quntityMax);
      // cartPage.actions.cartContainerTrigger();
      cartPage.actions.miniCartContainer();
      cartPage.tests.miniCartContainer();
      cartPage.tests.miniCartCounter(this.data.quntityMax)
      cartPage.tests.miniCartButtonCounter(this.data.quntityMax)
    });
  });

  after(function() {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});