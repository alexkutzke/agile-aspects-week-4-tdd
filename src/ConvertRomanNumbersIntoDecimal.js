const MyErrors = require('./utils/errors/MyErrors')

class ConvertRomanNumbersIntoDecimal {

  //Testes iniciais
  static convert(romanNumber) {
    switch (romanNumber) {
      case 'I':
        return 1
      case 'V':
        return 5
      default:
        return new MyErrors.notFoundError()
    }
  }
}

console.log(ConvertRomanNumbersIntoDecimal.convert('V'))
module.exports = ConvertRomanNumbersIntoDecimal