require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL || 'https://staging-www.easycater.co.in',
  phone: process.env.TEST_PHONE || '',
  otp: process.env.TEST_OTP || '',
  allowPlaceOrder: String(process.env.ALLOW_PLACE_ORDER).toLowerCase() === 'true',
  authFile: '.auth/user.json',
};