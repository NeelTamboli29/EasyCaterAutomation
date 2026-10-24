const BasePage = require('./BasePage');
const L = require('./locators').restaurant;
const praseMoney = require('../utils/gst');

class RestaurantPage extends BasePage {
      /** Adds the first N addable items; returns [{name, price}] */
    async addItems(count = 1) {
        const added = [];
        const items = this.page.locator(L.menuItem).filter({ has: this.page.locator(L.addButton) });
        await items.first().waitFor({ state: 'visible' });

        for (let i = 0; i < count; i++) {
            const item = items.nth(i);
            const name = (await item.locator(L.itemName).first().innerText()).trim();
            const price = praseMoney(await item.locator(L.itemPrice).first().innerText());
            const locator = item.locator(L.addButton).first().click();

                  // Customisation popup (size / add-ons) - confirm with defaults
                const ModalAdd = this.page.locator(L.customizeModalAdd).first();
                if (await ModalAdd.isVisible({ timeout: 1500 }).catch(() => false)) await ModalAdd.click();

                // "Replace cart?" prompt if cart already has another restaurant's items
                const replace = this.page.locator(L.replaceCartConfirm).first();
                if (await replace.isVisible({ timeout: 1000 }).catch(() => false)) await replace.click();

                added.push({ name, price });
        }
        return added;
    }
    async increaseQty(times = 1) {
        for (let i = 0; i < times; i++)  await this.loc(L.plusButton).click();
    }
    async goToCart() {
        await this.click(L.viewCart);
        await this.page.waitForLoadState('networkidle').catch(() => {});
    }
}
module.exports = RestaurantPage;