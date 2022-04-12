#! /usr/bin/env node

const egypt = require('./egypt');

test('10 20 30 => wrong', () => {
  expect(egypt.answer(10, 20, 30)).toBe('wrong');
});

test('15 9 12 => right', () => {
  expect(egypt.answer(15, 9, 12)).toBe('right');
});


test('[10, 20, 30] => wrong', () => {
  expect(egypt.answer1([10, 20, 30])).toBe('wrong');
});

test('[15, 9, 12] => right', () => {
  expect(egypt.answer1([15, 9, 12])).toBe('right');
});
