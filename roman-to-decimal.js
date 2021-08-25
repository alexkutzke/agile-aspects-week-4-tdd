export class RomanToDecimal {

    validValues = 'IVXLDCM';
    charsRomanValue = [];

    convert(romanValue) {
        if (!romanValue) {
            return 0;
        }
        this.validateValue(romanValue);
        return 0;
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
            .some(charValue => !this.validValues.includes(charValue));
        if (hasInvalidChar) {
            throw new Error('Invalid Roman Value');
        }
    }
}