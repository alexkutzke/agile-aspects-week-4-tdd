// Converts a roman numeral string to a decimal number
class RomanToDecimal {
    static convert(roman) {
        const romanToDecimal = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

        let decimal = 0;
        let previous = 0;

        for (let i = roman.length - 1; i >= 0; i--) {
            let current = romanToDecimal[roman[i]];
            decimal += current;

            if (current < previous) {
                decimal -= 2 * current;
            }

            previous = current;
        }

        return decimal;
    }
}

module.exports = RomanToDecimal;