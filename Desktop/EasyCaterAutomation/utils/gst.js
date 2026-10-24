const round2 = (n) => Math.round(n + Number.EPSILON * 100) / 100;

function calculateBill({
    itemTotal = 0, discount = 0, packaging = 0, delivery = 0, platformFee = 0,
    rates = { food: 5, packaging: 5, delivery: 18, platformFee: 18 },
}) {
    const taxableFood = Math.max(itemTotal - discount, 0);
    const foodGst = round2(taxableFood * rates.food / 100);
    const packagingGst = round2(packaging * rates.packaging / 100);
    const deliveryGst = round2(delivery * rates.delivery / 100);
    const platformFeeGst = round2(platformFee * rates.platformFee / 100);

    const totalGst = round2(foodGst + packagingGst + deliveryGst + platformFeeGst);
    const grandTotal = round2(taxableFood + packaging + delivery + platformFee + totalGst);

    return {taxableFood, foodGst, packagingGst, deliveryGst, platformFeeGst, totalGst, grandTotal};
    
}

/** "₹1,234.50", "- ₹40", "Rs. 99" -> number */
function parsePrice(text) {
    if (text == null) return 0;
    const m = String(text).replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
    return m ? parseFloat(m[1]) : 0;
}

module.exports = { calculateBill, praseMoney, round2  };
