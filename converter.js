const ROMAN_VALUE = [];
ROMAN_VALUE[1] = "I";
ROMAN_VALUE[5] = "V";
ROMAN_VALUE[10] = "X";
ROMAN_VALUE[50] = "L";
ROMAN_VALUE[100] = "C";

class Converter {
  constructor(roman) {
    this.roman = roman;
  }

  run() {

    const romanSplited = this.roman.split("");

    var decimalDigits = 0;
    for (var i = 0; i < romanSplited.length; i++) {
      let value = ROMAN_VALUE.indexOf(romanSplited[i]);
      let nextValue = ROMAN_VALUE.indexOf(romanSplited[i + 1]);
      let nextRomanDigit = romanSplited[i + 1];
      let currentRomanDigit = romanSplited[i];

      if (nextValue > value) {
        decimalDigits = decimalDigits - value;
      } else if (nextValue <= value) {
        decimalDigits = decimalDigits + value;
      }
    }

    return decimalDigits;
  }
}

export default Converter;