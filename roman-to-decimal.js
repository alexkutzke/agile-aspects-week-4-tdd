export class RomanToDecimal {

    romanToDecimalValues = {
        'I': {
            value: 1,
            repeatCountAllowed: 3
        },
        'V': {
            value: 5,
            repeatCountAllowed: 1
        },
        'X': {
            value: 10,
            repeatCountAllowed: 3
        },
        'L': {
            value: 50,
            repeatCountAllowed: 1
        },
        'C': {
            value: 100,
            repeatCountAllowed: 3
        },
        'D': {
            value: 500,
            repeatCountAllowed: 1
        },
        'M': {
            value: 1000,
            repeatCountAllowed: 3
        }
    };
    allowedSubtractionValues = [
        this.romanToDecimalValues['I'].value, 
        this.romanToDecimalValues['X'].value, 
        this.romanToDecimalValues['C'].value
    ];
    charsRomanValue = [];
    decimalValue = 0;
    lastDecimalValue = 0;
    currentRomanValue = null;
    currentCountCharRoman = 1;

    convert(romanValue) {
        if (!romanValue) {
            return 0;
        }
        this.validateValue(romanValue);
        return this.getDecimalValue();
    }

    validateValue(romanValue) {
        this.validateType(romanValue);
        this.mapChars(romanValue);
        this.validateAllChars();
    }

    validateType(romanValue) {
        if (typeof romanValue !== 'string') {
            throw new Error('Invalid Param Type');
        }
    }

    mapChars(romanValue) {
        this.charsRomanValue = romanValue.split('');
    }

    validateAllChars() {
        const hasInvalidChar = this.charsRomanValue
            .some(charValue => 
                !Object.keys(this.romanToDecimalValues).includes(charValue)
            );
        if (hasInvalidChar) {
            throw new Error('Invalid Roman Value');
        }
    }

    getDecimalValue() {
        this.charsRomanValue.reverse().forEach(charRomanValue => {
            this.calculateDecimalValue(charRomanValue);
        });
        return this.decimalValue;
    }

    calculateDecimalValue(charRomanValue) {
        this.currentRomanValue = this.romanToDecimalValues[charRomanValue];
        this.checkRepeatCountAllowed();
        let decimalValueForChar = this.currentRomanValue.value;
        if (decimalValueForChar >= this.lastDecimalValue) {
            this.decimalValue += decimalValueForChar;
        } else {
            this.checkAllowedSubtraction();
            this.decimalValue -= decimalValueForChar;
        }
        this.lastDecimalValue = decimalValueForChar;
    }

    checkRepeatCountAllowed() {
        if (this.lastDecimalValue === this.currentRomanValue.value) {
            this.currentCountCharRoman++;
        } else {
            this.currentCountCharRoman = 1;
        }
        if (this.currentCountCharRoman > this.currentRomanValue.repeatCountAllowed) {
            throw new Error('Invalid Roman Value');
        }
    }

    checkAllowedSubtraction() {
        if (!this.allowedSubtractionValues.includes(this.currentRomanValue.value)) {
            throw new Error('Invalid Roman Value');
        }
    }
}