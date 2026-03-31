function getShippingMessage(country, price, deliveryFee) {
  if (
    !(typeof country === 'string') ||
    typeof price !== 'number' ||
    isNaN(price) ||
    typeof deliveryFee !== 'number' ||
    isNaN(deliveryFee)
  )
    throw new TypeError(
      `Expected str and two numbers, got: ${typeof country}, ${typeof price}, ${typeof deliveryFee}`
    );

  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

console.log('----- TASK 2 -----');
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
console.log('');
