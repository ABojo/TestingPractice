const caesarCipher = require('../functions/caesarCipher');

test('Shift the word "Testing"', () => {
  expect(caesarCipher('Testing')).toBe('Alzapun');
});

test('Shift the phrase "The Odin Project"', () => {
  expect(caesarCipher('The Odin Project')).toBe('Aol Vkpu Wyvqlja');
});

test('Shift the phrase "tEsT tHe CaSe"', () => {
  expect(caesarCipher('tEsT tHe CaSe')).toBe('aLzA aOl JhZl');
});
