class RomanToDecimal {
  constructor() {
    this.romanNumerals = {
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
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
      const currentRoman = roman[i];
      const currentDecimal = this.romanNumerals[currentRoman];

      if (currentDecimal === undefined) {
        throw new Error('Invalid Roman numeral');
      }

      if (currentDecimal < prevValue) {
        result -= currentDecimal;
      } else {
        result += currentDecimal;
      }

      prevValue = currentDecimal;
    }

    return result;
  }
}

module.exports = RomanToDecimal;