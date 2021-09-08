export default class Roman {
  constructor(romanNumber) {
    this.romanNumber = romanNumber;
    this.romanChars = romanNumber.split('');
    this.decimalConverted = 0;
    this.romanConstants = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  }
  convertToDecimal() {
    this.romanChars.forEach((element, index) => {
      if (this.decimalConverted == 0){
        this.decimalConverted = this.romanConstants[element];
      }
      else if (this.romanIsDecreasing(element, index)) {
        this.decimalConverted = this.romanConstants[element] - this.decimalConverted;
      } else {
        this.decimalConverted += this.romanConstants[element];
      }
    });
    return this.decimalConverted;
  }

  romanIsDecreasing(element, index) {
    return this.romanConstants[element] > this.decimalConverted ||( this.romanChars[index + 1] !== 'undefined' && this.romanConstants[this.romanChars[index + 1]] > this.romanConstants[element]);
  }
}
