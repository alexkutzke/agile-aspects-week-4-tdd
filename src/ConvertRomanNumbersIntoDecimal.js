import MyErrors from './utils/errors/MyErrors'

class ConvertRomanNumbersIntoDecimal {
  static romanToDecimalMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  convert(romanNumber) {
    let decimalNumber = 0;

    if (romanNumber === null || romanNumber === '') {
      throw MyErrors.notFoundError();
    }

    for (let i = 0; i < romanNumber.length; i++) {
      const currentDecimal = ConvertRomanNumbersIntoDecimal.romanToDecimalMap[romanNumber[i]];
      const nextDecimal = ConvertRomanNumbersIntoDecimal.romanToDecimalMap[romanNumber[i + 1]];
      
      if (currentDecimal === undefined) {
        throw new MyErrors.notFoundError();
      }

      if (nextDecimal > currentDecimal) {
        decimalNumber -= currentDecimal;
      } else {
        decimalNumber += currentDecimal;
      }
    }

    return decimalNumber;
  }
}


export default ConvertRomanNumbersIntoDecimal
