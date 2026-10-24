const { test : setup } = require('../fixtures/fixtures');
const env = require('../config/env');

setup('Login once and save session state', async ({ loginPage, page }) => {
    setup.skip(!env.phone, 'TEST_PHONE not set in .env');
    await loginPage.loginWithOTP(env.phone, env.otp);
    await page.context().storageState({ path: env.authFile });
});