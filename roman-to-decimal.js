// Aluno: Leonardo Raduy Lemos

// ORIGINAL CODE => WORKS

function romanToDecimal(roman) {

    let convertionTable = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let nextTwoSimbles = {
        "I": ["V","X"],
        "V": ["X","L"],
        "X": ["L","C"],
        "L": ["C","D"],
        "C": ["D","M"],
        "D": ["M",""],
        "M": ["",""]
    }

    let decimal = 0;
    let decomposedRoman = roman.split('');
    for(let i = 0; i < decomposedRoman.length; i++) {
        let converted = convertionTable[decomposedRoman[i]];
        if(
            decomposedRoman[i+1] == nextTwoSimbles[decomposedRoman[i]][0]
            ||
            decomposedRoman[i+1] == nextTwoSimbles[decomposedRoman[i]][1]
            ) {
            converted = -converted
        }
        decimal += converted;
    }
    return decimal;
}

module.exports = romanToDecimal;

/* REFACTORED CODE => DOESN'T WORK

function romanToDecimal(roman) {

    let decomposedRoman = roman.split('');
    return convertDecomposedRomanToDecimal(decomposedRoman);
}

function convertDecomposedRomanToDecimal(decomposedRoman) {
    let decimal = 0;
    for(let i = 0; i < decomposedRoman.length; i++) {
        let converted = convertionTable[decomposedRoman[i]];
        if(
            decomposedRoman[i+1] == nextTwoSimbles[decomposedRoman[i]][0]
            ||
            decomposedRoman[i+1] == nextTwoSimbles[decomposedRoman[i]][1]
            ) {
            converted = -converted
        }
        decimal += converted;
    return decimal;
}

var convertionTable = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var nextTwoSimbles = {
    "I": ["V","X"],
    "V": ["X","L"],
    "X": ["L","C"],
    "L": ["C","D"],
    "C": ["D","M"],
    "D": ["M",""],
    "M": ["",""]
};

module.exports = romanToDecimal;
*/