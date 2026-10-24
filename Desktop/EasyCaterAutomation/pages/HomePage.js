const BasePage = require('./BasePage');
const L = require('./locators').home;
const testData = require('../test-data/testData.json');

class HomePage extends BasePage {
  async open() { await this.goto('/'); }
  async search(keyword = testData.search.keyword) {
    await this.fill(L.searchInput, keyword);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle').catch(() => {});
  }
  async openFirstRestaurant() {
    const card = this.loc(L.restaurantCard);
    await card.waitFor({ state: 'visible' });
    await card.click();
    await this.page.waitForLoadState('networkidle').catch(() => {});
  }
  restaurantCards() { return this.page.locator(L.restaurantCard); }
  noResults() { return this.loc(L.noResults); }
  async openCart() { await this.click(L.cartIcon); }
}
module.exports = HomePage;