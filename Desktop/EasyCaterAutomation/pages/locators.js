module.exports = {
    home: {
        locationInput: '[data-testid="location-input"], input[placeholder*="location" i], input[placeholder*="address" i]',
        searchInput: '[data-testid="search-input"], input[placeholder*="search" i]',
        loginButton: '[data-testid="login-button"], button:has-text("Login"), a:has-text("Login")',
        cartIcon: '[data-testid="cart-icon"], a[href*="/cart"], button:has-text("Cart")',
        restaurantCard: '[data-testid="restaurant-card"], [data-testid="restaurant-list"] a[href*="/restaurant/"]',
        noResults: 'text=/no (results|restaurants|dishes) found/i',
    },
    login: {
        phoneInput: '[data-testid="phone-input"], input[type="tel"], input[placeholder*="phone" i], input[placeholder*="mobile" i]',
        sendOtpButton: 'button:has-text("Send OTP"), button:has-text("Get OTP"), button:has-text("Continue"), button:has-text("Login")',
        otpInputs: '[data-testid="otp-input"], input[autocomplete="one-time-code"], input[inputmode="numeric"][maxlength="1"], input[placeholder*="OTP" i]',
        verifyButton: 'button:has-text("Verify"), button:has-text("Submit"), button:has-text("Continue")',
        loggedInMarker: '[data-testid="profile"], a[href*="profile" i], a[href*="account" i], text=/my (profile|account|orders)/i',
    },
}