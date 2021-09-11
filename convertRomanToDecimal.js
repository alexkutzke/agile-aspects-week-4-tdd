
const romanDecimalValuesTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};


function convertRomanToDecimal(romanValue) {

    // if (!/[A-Z]*$/u.test(romanValue)) {
    //     throw new Error('Is not a Roman Number!')
    // } else {
        
        let decimalResult = 0;
        //const valuesSplit = romanValue.split('');

        for (let i = 0; i < romanValue.length; i++) {

            let charValue = romanValue[i];

            validateIsRomanNumberIsDecimal(charValue);

            if (romanDecimalValuesTable[romanValue[i]] < romanDecimalValuesTable[romanValue[i + 1]]) {
                decimalResult += romanDecimalValuesTable[romanValue[i + 1]] - romanDecimalValuesTable[romanValue[i]];
                i += 1;
            } else {
                decimalResult += romanDecimalValuesTable[romanValue[i]];
            }

        }

        return decimalResult
    //}
}

function validateIsRomanNumberIsDecimal(charValue) {
    const decimal = romanDecimalValuesTable[charValue];
    if (!decimal) {
        throw new Error('Is Char not a Roman Number!');
    }
}

module.exports = convertRomanToDecimal;