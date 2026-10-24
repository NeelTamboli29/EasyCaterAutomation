const BasePage = require('./BasePage');
const L = require('./locators').cart;
const {amountForLable} = require('../utils/helpers');

class CartPage extends BasePage {
    rows() { return this.page.locator(L.row); }
    async itemNames() { return (await this.rows().allInnerTexts()).map((t) => t.lowerCase()); }
    async increase(rowIndex = 0) {
        await this.rows().nth(rowIndex).locator(L.rowPlus).first().click();
        await this.page.waitForLoadState('networkidle').catch(() => {});
    }
    async decrease(rowIndex = 0) {
        await this.rows().nth(rowIndex).locator(L.rowMinus).first().click();
        await this.page.waitForLoadState('networkidle').catch(() => {});
    }
    async quantity(rowIndex = 0) {
        const txt = await this.rows().nth(rowIndex).locator(L.rowQty).first().innerText();
        return parseInt(txt.replace(/\D/g, ''), 10);
    }
    async applyCoupon(code) {
        await this.fill(L.couponInput, code);
        await this.click(L.applyCoupon);
    }
      /** Reads the displayed bill to compare with our own GST calculation */
    async readBill(containerSelector = L.billSummary) {
        const text = await this.loc(containerSelector).innerText();
        return {
            raw: text,
            itemTotal: amountForLable(text, /item total|sub ?total|items? total/),
            discount: amountForLable(text, /discount|coupon/),
            packaging: amountForLable(text, /packaging|packing/),
            delivery: amountForLabel(text, /delivery (fee|charge)s?/),
            platformFee: amountForLabel(text, /platform fee|convenience fee/),
            gst: amountForLabel(text, /gst|taxes?( and charges)?/),
            grandTotal: amountForLabel(text, /grand total|to pay|total payable|total amount|^total/m),
        };
    }
    async proceed() {
        await this.click(L.proceedToCheckout);
        await this.page.waitForLoadState('networkidle').catch(() => {});
    }
}
module.exports = CartPage;