const romanNumbers = ["I", "V", "X"]
const romanPatters = [/I/g, /V/g, /X/g]

const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
}


class RomanToDecimal {
    constructor(romanNumber) {
        this.romanNumber = romanNumber;
    }

    convert(){
        let total = 0;
        total += this.evaluateSubtraction();
        total += this.evaluateAddition();
        return total
    }

    evaluateAddition(){
        let total = 0;
        for (let index = 0; index < romanPatters.length; index++){
            const romanNumberCounter = this.countRomanNumbers(romanPatters[index]);
            total += romanNumberCounter ? this.evaluateDecimalValue(romanNumberCounter, index) : 0;
        }
        return total;
    }

    countRomanNumbers(pattern){
        return this.romanNumber.match(pattern)
    }

    evaluateDecimalValue(numberCounter, valueIndex){
        return numberCounter.length * romanNumerals[romanNumbers[valueIndex]]
    }

    evaluateSubtraction(){
        let result = 0
        for (let index = 0; index < this.romanNumber.length; index++){
            const currentRomanNumber = this.romanNumber[index];

            if (index > 0){
                const previousRomanNumber = this.romanNumber[index - 1];

                if (previousRomanNumber === "I" && currentRomanNumber === "V"){
                    this.romanNumber = this.romanNumber.replace(/IV/g, "")
                    result = 4.0;
                } else if (previousRomanNumber === "I" && currentRomanNumber === "X"){
                    this.romanNumber = this.romanNumber.replace(/IX/g, "")
                    result = 9.0
                }
            }
        }
        return result;
    }
}

module.exports = RomanToDecimal;