const RomanLettersValues = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,

}

class RomanNumeral {
    constructor(roman){
        this.roman = roman;
        this.decimal = this.#toInt();
    }

    toInt () {
        return(this.decimal);
    }

    #toInt() {
    let decimalValue = 0;
    let lastRomanDigit = '';
    let timesRomanDigitRepeated = 1;


for (let index = 0; index < this.roman.length; index++) {
    const currenteRomanDigit = this.roman[index];
    const currentDecimalDigit =  RomanLettersValues[currenteRomanDigit];


    if (currenteRomanDigit === lastRomanDigit) {
        timesRomanDigitRepeated++;
    }
    else {
        timesRomanDigitRepeated = 1;
    }

    if(timesRomanDigitRepeated > 3) {
    throw new Error ('Número romano inválido!');
    }

    if ( index+1 < this.roman.length){
        const nextRomanDigit = this.roman[index+1];
        const nextDecimalDigit = RomanLettersValues [nextRomanDigit];

    if (currentDecimalDigit < nextDecimalDigit){
        decimalValue -= currentDecimalDigit;
        }
    else {
    decimalValue += currentDecimalDigit;
        }
    }
    else {
        decimalValue += currentDecimalDigit;
            }
    lastRomanDigit = currenteRomanDigit;
        }
    return(decimalValue);
 }
}

export default RomanNumeral;
