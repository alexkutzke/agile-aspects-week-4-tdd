const romanNumerals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);

function romanToDecimal(romanValue) {

    if (!isValidRoman(romanValue)) {
        throw new Error('Invalid entry roman numeral!');
    }

    let decimalValue = 0;
    let romanValueSplit = romanValue.split('');

    romanValueSplit.forEach((element, index) => {
        const currentValue = romanNumerals.get(element);
        const nextValue = romanNumerals.get(romanValueSplit[index + 1]);
        decimalValue += calculateDecimalValue(currentValue, nextValue);
    });

    return decimalValue;
}

function isValidRoman(romanValue) {
    if (typeof romanValue !== 'string' || !romanValue.match(/^[IVXLCDM]+$/)) {
        return false
    }
    return true
}

function calculateDecimalValue(currentValue, nextValue) {
    return currentValue < nextValue ? -currentValue : currentValue;
}

export { romanToDecimal }