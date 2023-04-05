class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
  add() {
    return this.firstNumber + this.secondNumber;
  }

  subtract() {
    return this.firstNumber - this.secondNumber;
  }

  multiply() {
    return this.firstNumber * this.secondNumber;
  }

  divide() {
    return this.firstNumber / this.secondNumber;
  }
}

module.exports = Calculator;