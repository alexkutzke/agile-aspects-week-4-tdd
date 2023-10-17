class RomanToDec {
  constructor() {
    this.romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  }

  convert(roman) {
    if (typeof roman !== 'string') {
      throw new Error('Input should be a string');
    }

    let result = 0;
    let romanValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
      const currentRoman = roman[i];
      const currentDecimal = this.romanNumbers[currentRoman];

      if (currentDecimal === undefined) {
        throw new Error('Invalid Roman numeral');
      }

      if (currentDecimal < romanValue) {
        result -= currentDecimal;
      } else {
        result += currentDecimal;
      }

      romanValue = currentDecimal;
    }

    return result;
  }
}

module.exports = RomanToDec;