const calculator = require('../functions/calculator');

test('8+10=18', () => {
  expect(calculator.add(8, 10)).toBe(18);
});

test('50-30=20', () => {
  expect(calculator.subtract(50, 30)).toBe(20);
});

test('8*2=16', () => {
  expect(calculator.multiply(8, 2)).toBe(16);
});

test('100/25=4', () => {
  expect(calculator.divide(100, 25)).toBe(4);
});
