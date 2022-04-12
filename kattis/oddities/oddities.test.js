
const oddities = require("./oddities");

test('-10 -> is even', () => {
  expect(oddities.answer(-10)).toBe('is even');
});

test('0 -> is even', () => {
  expect(oddities.answer(0)).toBe('is even');
});

test('-3453523 -> is odd', () => {
  expect(oddities.answer(-3453523)).toBe('is odd');
});