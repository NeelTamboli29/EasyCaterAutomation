class BasePage {
    constructor(page) { this.page = page;}
    async goto(path = '/') {
        await this.page.goto(path, { waitUntil: 'domcontentloaded' });
        await this.page.waitForLoadState('networkidle').catch(() => {}); // ignore timeout errors
    }
    loc(selectors) { return this.page.locator(selectors).first(); }
    async click(selectors) {
        const el = this.loc(selectors);
        await el.waitFor({ state: 'visible' });
        await el.click();
    }
    async fill(selectors, value) {
        const el = this.loc(selectors);
        await el.waitFor({ state: 'visible' });
        await el.fill(value);
    }
    async isVisible(selectors, timeout = 5000) {
        return this.loc(selectors).isVisible({ timeout }).catch(() => false);
    }
}
module.exports = BasePage;