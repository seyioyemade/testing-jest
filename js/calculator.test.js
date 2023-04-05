const calculator = require('./calculator')

describe('addition', () => {
  test('add numbers', () => {

    const addNumbers = new calculator(6, 4);
  
    expect(addNumbers.add()).toBe(10)
    
  })
  
  test('add numbers', () => {
  
    const addNumbers = new calculator(20, 7);
  
    expect(addNumbers.add()).toBe(27)
    
  })
  
  test('add numbers', () => {
  
    const addNumbers = new calculator(100, 400);
  
    expect(addNumbers.add()).toBe(500)
    
  })

});

describe('subtraction', () => {
  test('subtract numbers', () => {

    const subtractNumbers = new calculator(6, 4);
  
    expect(subtractNumbers.subtract()).toBe(2)
    
  })
  
  test('subtract numbers', () => {
  
    const subtractNumbers = new calculator(2, 8);
  
    expect(subtractNumbers.subtract()).toBe(-6)
    
  })
  
  test('subtract numbers', () => {
  
    const subtractNumbers = new calculator(53, 11);
  
    expect(subtractNumbers.subtract()).toBe(42)
    
  })
});

describe('multiplication', () => {  
   
  test('multiply numbers', () => {

    const multiplyNumbers = new calculator(6, 4);

    expect(multiplyNumbers.multiply()).toBe(24)
    
  })

  test('multiply numbers', () => {

    const multiplyNumbers = new calculator(10, 7);

    expect(multiplyNumbers.multiply()).toBe(70)
    
  })

  test('multiply numbers', () => {

    const multiplyNumbers = new calculator(5, 200);

    expect(multiplyNumbers.multiply()).toBe(1000)
    
  }) 

});

describe('divition', () => {
  test('divide numbers', () => {

    const divideNumbers = new calculator(10, 2);
  
    expect(divideNumbers.divide()).toBe(5)
    
  })
  
  test('divide numbers', () => {
  
    const divideNumbers = new calculator(6, 4);
  
    expect(divideNumbers.divide()).toBe(1.5)
    
  })
  
  test('divide numbers', () => {
  
    const divideNumbers = new calculator(200, 5);
  
    expect(divideNumbers.divide()).toBe(40)
    
  })
  
});




