
const helpaphd = require('./helpaphd');

test('P=NP -> skipped', ()=> {
  expect(helpaphd.answer('P=NP')).toBe('skipped');
});

test('10+3 -> 13', () => {
  expect(helpaphd.answer('10+3')).toBe(13);
});

test('0+1000', () => {
  expect(helpaphd.answer('0+1000')).toBe(1000);
})