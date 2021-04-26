const capitalize = require('../functions/capitalize');

test('capitalizes first letter of "word"', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalizes first letter of "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('capitalizes first letter "jAVASCRIPT"', () => {
  expect(capitalize('jAVASCRIPT')).toBe('JAVASCRIPT');
});
