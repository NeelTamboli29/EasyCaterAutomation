const base = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const RestaurantPage = require('../pages/RestaurantPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const { blockPaymentGateways } = require('../utils/helpers');

exports.test = base.test.extend({
  // Payment gateways are blocked for EVERY test automatically
  context: async ({ context }, use) => {
    await blockPaymentGateways(context);
    await use(context);
  },
  homePage: async ({ page }, use) => use(new HomePage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  restaurantPage: async ({ page }, use) => use(new RestaurantPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
});
exports.expect = base.expect;