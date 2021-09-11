//romanToDecimal("LXXXIV");

function romanToDecimal(roman) {
    console.log('Decimal GO');

    let convertionTable = { "I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M": 1000}

    let nextTwoSimbles = {"I": ["V","X"],"V": ["X","L"],"X": ["L","C"],"L": ["C","D"],"C": ["D","M"],"D": ["M",""],"M": ["",""] }

    let decimal = 0;
    let romanSplit = roman.split('');
    for(let i = 0; i < romanSplit.length; i++) {
        let converted = convertionTable[romanSplit[i]];
        if(
            romanSplit[i+1] == nextTwoSimbles[romanSplit[i]][0]
            ||
            romanSplit[i+1] == nextTwoSimbles[romanSplit[i]][1]
            ) {
            converted = -converted
        }
        decimal += converted;
    }
    console.log('Decimal!', decimal);
    return decimal;
    
}
module.exports = romanToDecimal;

//export { romanToDecimal };