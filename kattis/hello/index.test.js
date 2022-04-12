
const index = require('./index');

test('Should print Hello World!', ()=> {
  let expected = 'Hello World!';
  expect(index.answer()).toBe(expected);
});
