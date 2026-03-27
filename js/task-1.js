function makeTransaction(quantity, pricePerDroid) {
  if (
    !Number.isInteger(quantity) ||
    typeof pricePerDroid !== 'number' ||
    isNaN(pricePerDroid)
  )
    throw new TypeError(
      `Expected int and float, got: ${typeof quantity} and ${typeof pricePerDroid}`
    );

  return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}

console.log('----- TASK 1 -----');
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
console.log('');
