const caesarCipher = require('../functions/caesarCipher');

test('Shift the word "Testing"', () => {
  expect(caesarCipher('Testing', 7)).toBe('Alzapun');
});

test('Shift the phrase "The Odin Project"', () => {
  expect(caesarCipher('The Odin Project', 10)).toBe('Dro Ynsx Zbytomd');
});

test('Shift the phrase "tEsT tHe CaSe"', () => {
  expect(caesarCipher('tEsT tHe CaSe', 4)).toBe('xIwX xLi GeWi');
});
