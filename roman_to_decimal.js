class RomanToDecimal {
    
    constructor(romanString) {
        
        this.romanString = romanString;

        this.romanLettersArray = [
            'I', 'V', 'X', 'L', 'C', 'D', 'M'
        ]

        this.romanEquivalentDecimalsArray = [
            1, 5, 10, 50, 100, 500, 1000
        ]
    }

    toDecimal () {
        let romanDecimalArray = this.transformStringToNumbersArray();
        romanDecimalArray = this.applyNegativeValues(romanDecimalArray);
        let arraySum = 0;
        for (let i = 0; i < romanDecimalArray.length; i++) {
            arraySum += romanDecimalArray [i];
        }
        return arraySum;
    }

    convertLetterToDecimal (letterInput) {
        let indexOfLetter = this.romanLettersArray.indexOf(letterInput);
        return this.romanEquivalentDecimalsArray[indexOfLetter];
    }

    transformStringToNumbersArray () {
        let transformedArray = [];
        for (let i = 0; i < this.romanString.length; i++) {
            transformedArray[i] = this.romanString.charAt(i);
            transformedArray[i] = this.convertLetterToDecimal(transformedArray[i]);
        }
        return transformedArray;
    }

    applyNegativeValues(transformedNumberArray) {
        let finalArray = transformedNumberArray;
        for (let i = finalArray.length; i > 0; i--) {
            if (finalArray[i-1] < finalArray[i]) {
                finalArray[i-1] = -finalArray[i-1];
            }
        }
        return finalArray;
    }
}

export {RomanToDecimal};
