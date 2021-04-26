const reverseString = require('../functions/reverseString');

test('reverse the the string "racecar"', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('reverse the the string "abcd"', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('reverse the the string "reverse"', () => {
  expect(reverseString('reverse')).toBe('esrever');
});
