const { praseMoney } = require('./gst');

/** Finds "<label> ... ₹123" inside a block of text. Returns 0 if label absent. */
function amountForLabel(blockText, labelRegex) {
    const flage = labelRegex.flags.includes('i') ? '' : 'i';
    const re = new RegExp(`(?:${labelRegex.source})[^\\d\\n]*?(?:₹|Rs\\.?)?\\s*-?\\s*([\\d,]+(?:\\.\\d+)?)`, flage);
    const m = blockText.match(re);
    return m ? praseMoney(m[1]) : 0;
}

/** SAFETY NET: aborts any request to a payment gateway. */
async function blockPaymentGateways(context) {
    const patterns = [
    /razorpay\.com/i, /paytm/i, /phonepe/i, /cashfree/i, /payu/i,
    /billdesk/i, /ccavenue/i, /stripe\.com/i, /juspay/i, /upi:\/\//i,
    ];
    await context.route((url) => patterns.some((p) => p.test(url.toString())), (route) => {
        console.warn('[SAFETY] Blocked payment gateway request:',route.request().url());
        return route.abort();
    });
}

module.exports = { amountForLabel, blockPaymentGateways };