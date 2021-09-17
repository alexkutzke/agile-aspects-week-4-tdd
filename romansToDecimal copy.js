const CONFIG_DIGITS = [];
CONFIG_DIGITS[1] = "I";
CONFIG_DIGITS[5] = "V";
CONFIG_DIGITS[10] = "X";
CONFIG_DIGITS[50] = "L";
CONFIG_DIGITS[100] = "C";
CONFIG_DIGITS[500] = "D";
CONFIG_DIGITS[1000] = "M";

class Converter {
  constructor(roman) {
    this.roman = roman;
  }

  run() {
    const romanSplited = this.roman.split("");

    var decimalDigits = 0;
    for (var i = 0; i < romanSplited.length; i++) {
      let currentValue = CONFIG_DIGITS.indexOf(romanSplited[i]);
      let nextValue = CONFIG_DIGITS.indexOf(romanSplited[i + 1]);
      let nextRomanDigit = romanSplited[i + 1];
      let currentRomanDigit = romanSplited[i];

      if (nextValue > currentValue) {
        decimalDigits = decimalDigits - currentValue;
      } else if (nextValue <= currentValue) {
        decimalDigits = decimalDigits + currentValue;
      }
    } //end for

    return decimalDigits;
  }
}

export default Converter;
