const RomanLetterValues = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

class RomanNumeral {
    constructor(roman){
        this.roman = roman;
        this.decimal = this.#toInt();
    }

    toInt() {
        return(this.decimal);
    }

    #toInt(){
        let decimalValue = 0;
        let lastRomanDigit = '';
        let timesRomanDigitIsRepeated = 1;

        for (let index = 0; index < this.roman.length; index++) {
            const currentRomanDigit = this.roman[index];
            const currentDecimalDigit = RomanLetterValues[currentRomanDigit];

            if(currentRomanDigit === lastRomanDigit) {
                timesRomanDigitIsRepeated++;
            }
            else {
                timesRomanDigitIsRepeated = 1;
            }

            if (timesRomanDigitIsRepeated > 3) {
                throw new Error('Invalid roman number.');
            }

            if (index + 1 < this.roman.length) {
                const nextRomanDigit = this.roman[index+1];
                const nextDecimalDigit = RomanLetterValues[nextRomanDigit];

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
            lastRomanDigit = currentRomanDigit;   
        }
        return(decimalValue);
    }
}

export default RomanNumeral;