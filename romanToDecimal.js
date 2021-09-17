class RomanToDecimal {
    static conversion(romanNumber) {
        var values = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }
        var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        var firstSlice = 0;
        var lastSlice = 1;
        var resultDecimal = 0;

        while (lastSlice <= romanNumber.length) {
            for (var i in symbols) {
                if (romanNumber.slice(firstSlice, lastSlice) === symbols[i]) {
                    resultDecimal += values[symbols[i]]
                    firstSlice += 1
                    lastSlice += 1 {
                        break;
                    }
                } else {
                    if (romanNumber.slice(firstSlice, lastSlice + 1) === symbols[i]) {
                        resultDecimal += values[symbols[i]]
                        firstSlice += 2
                        lastSlice += 2 {
                            break;
                        }
                    }
                }

            }
        }
        return resultDecimal
    }
}

export default RomanToDecimal;