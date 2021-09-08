export default class RomanToDecimal {


  static convert(romanString) {
    const romans = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
    const romanChars = romanString.split('');
    let decimal = 0;
    romanChars.forEach((element, index) => {
     if (decimal == 0){
        decimal = romans[element];
      }
      else if (romans[element] > decimal ||( romanChars[index+1] !== 'undefined' && romans[romanChars[index+1]] > romans[element])){
        decimal = romans[element] - decimal;
      }else {
        decimal += romans[element];
      }
    });
    return decimal;
  }
}
