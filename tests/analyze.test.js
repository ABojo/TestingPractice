const analyze = require('../functions/analyze');

test('Analyze the array [1,8,3,4,2,6]', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyze the array [1, 9]', () => {
  expect(analyze([1, 9])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 2,
  });
});

test('Analyze the array [1, 2, 3, 4 , 5]', () => {
  expect(analyze([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
