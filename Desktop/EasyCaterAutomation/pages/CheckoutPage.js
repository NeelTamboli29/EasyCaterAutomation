const BasePage = require('./BasePage');
const L = require('./locators').checkout;
const CartPage = require('./CartPage');
const env = require('../config/env');
const testData = require('../test-data/TestData.json');
const { stat } = require('node:fs');

class CheckoutPage extends BasePage {
    async ensureAddress() {
        const hasAddress = await this.isVisible(L.addressCard, 3000);
        if (hasAddress) return;
        await this.click(L.addAddressButton);
        await this.fill(L.addressLine, testData.address.line1);
        if (await this.isVisible(L.landmark, 1000)) await this.fill(L.landmark, testData.address.landmark);
        if (await this.isVisible(L.pincode, 1000)) await this.fill(L.pincode, testData.address.pincode);
        await this.click(L.saveAddress);
    }

    async readBill() { return new CartPage(this.page).readBill(L.billSummary); }
    async codAvailable() { return this.isVisible(L.codOption, 3000); }
    async selectCod() { await this.click(L.codOption); }

    /**
   * Places the order WITHOUT paying online.
   *  - Requires ALLOW_PLACE_ORDER=true
   *  - Only works with Cash on Delivery / pay-later
   *  - Never clicks "Pay", never touches a gateway
   */

    async placeOrderWithoutPayment () {
        if (!env.allowPlaceOrder) throw new Error('ALLOW_PLACE_ORDER is not true- refusing to place order');
        if (!(await this.codAvailable())) throw new Error ('COD not available - cannot place order without paying');
        await this.selectCod();
        await this.click(L.placeOrderButton);
        await this.loc(L.orderSuccess).waitFor({ state: 'visible', timeout: 30_000});
    }
}

module.exports = CheckoutPage;