const { sum } = require('../script.js');

test('Sum function adds two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});
