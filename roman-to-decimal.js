export class RomanToDecimal {
  romanNumeralsMatching = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  convert(romanNumeral) {
    this.validateParamIsString(romanNumeral);
    romanNumeral = romanNumeral.toUpperCase();

    let decimalNumber = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
      const letter = romanNumeral[i];
      this.validateLetterIsRomanNumeral(letter);

      const nextLetter = romanNumeral[i + 1];

      if (this.romanNumeralsMatching[letter] < this.romanNumeralsMatching[nextLetter]) {
        decimalNumber -= this.romanNumeralsMatching[letter];
      } else {
        decimalNumber += this.romanNumeralsMatching[letter];
      }
    }

    return decimalNumber;
  }

  validateParamIsString(romanNumeral) {
    if (typeof romanNumeral !== 'string') {
      throw new Error('The parameter entered is not a valid string.');
    }
  }

  validateLetterIsRomanNumeral(letter) {
    const decimalNumber = this.romanNumeralsMatching[letter];

    if (!decimalNumber) {
      throw new Error(
        'One or more letters entered do not make up the roman numbers.'
      );
    }
  }
  
}
