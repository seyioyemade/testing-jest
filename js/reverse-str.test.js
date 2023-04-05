const reverseString = require('./reverse-str')

test('reverse string', () => {
  let str = 'here'
  expect(reverseString(str)).toBe('ereh')
  
})