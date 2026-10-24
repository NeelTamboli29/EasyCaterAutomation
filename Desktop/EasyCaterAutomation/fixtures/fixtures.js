const base = require('@playwright/test');
const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');
const RestaurantPage = require('../pages/restaurant.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');
const { blockPaymentGateways } = require('../utils/helper');

exports.test = base.test.extend({
    // Payment gatewate are blocked for every test automatically 
    context: async ({ context }, use) => {
        await blockPaymentGateways(context);
        await use(context);
    },
    homePage: async ({ page }, use) => use (new HomePage(page)),
    loginPage: async ({ page }, use) => use (new LoginPage(page)),
    restaurantPage: async ({ page }, use) => use (new RestaurantPage(page)),
    cartPage: async ({ page }, use) => use (new CartPage(page)),
    checkoutPage: async ({ page }, use) => use (new CheckoutPage(page)),
});
exports.expect = base.expect;