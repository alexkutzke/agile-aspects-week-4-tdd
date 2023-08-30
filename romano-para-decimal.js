class RomanToDecimal {
  constructor(romanString) {
    this.romanString = romanString;

    this.romanToDecimalMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  }

  toDecimal() {
    const romanDecimalArray = this.transformStringToNumbersArray();
    const sum = romanDecimalArray.reduce((total, value, index, array) => {
      if (array[index + 1] > value) {
        return total - value;
      }
      return total + value;
    }, 0);
    return sum;
  }

  transformStringToNumbersArray() {
    return this.romanString
      .split("")
      .map((letter) => this.convertLetterToDecimal(letter));
  }

  convertLetterToDecimal(letterInput) {
    return this.romanToDecimalMap[letterInput] || 0;
  }
}

export { RomanToDecimal };
