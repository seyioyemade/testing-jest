const capitalizeString = require('./capitalize')

test('capitalize string', () => {

  expect(capitalizeString('ready')).toBe('Ready');
  expect(capitalizeString('tanGIble')).toBe('Tangible');
  
})