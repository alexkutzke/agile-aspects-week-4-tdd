export class RomanNumberToDecimal {
    romanNumbersDecimalValue = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    convertRomanNumberToDecimal(romanNumberString) {
        let decimalNumber = 0;
        for (let i = 0; i < romanNumberString.length; i++) {
            let letter = romanNumberString[i];
            let nextLetter = romanNumberString[i + 1];

            this.checkIfCharacterIsRomanNumber(letter);

            decimalNumber += this.calculateDecimalNumber(
                this.romanNumbersDecimalValue.get(letter), 
                this.romanNumbersDecimalValue.get(nextLetter));
        }
        
        return decimalNumber;
    }

    checkIfCharacterIsRomanNumber(letter) {
        if (!this.romanNumbersDecimalValue.has(letter)) {
            throw new Error('The character informed is not a roman number!');
        }
    }

    calculateDecimalNumber(currentNumber, nextNumber) {
        let decimalNumber = 0;

        if (currentNumber >= nextNumber || nextNumber == undefined) {
            decimalNumber += currentNumber;
        } else {
            decimalNumber -= currentNumber;
        }

        return decimalNumber;
    }
}
