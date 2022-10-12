const Capitalize = require('../modules/capitalizeString');

test('Capitalize first character of a string ', () => {
  expect(Capitalize('derrick')).toBe('Derrick');
})