const stringLength = require('./str-length')

test('finds the length of a given string between 1 & 10', () => {
  let str = 'here'
  if (str.length > 0 && str.length < 10){
  expect(stringLength(str)).toBe(4)
  }
})