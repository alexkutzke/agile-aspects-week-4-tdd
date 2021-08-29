export class Algorithm {
    constructor() { }

    static romanToDecimal(roman) {
        let result = 0;

        for (let i = 0; i < roman.length; i++) {
            if (roman[i] == "I") {
                result = Algorithm.calculateI(roman, i, result);
            }
            else if (roman[i] == "V") {
                result = result + 5;
            }
            else if (roman[i] == "X") {
                result = Algorithm.calculateX(roman, i, result);
            }
            else if (roman[i] == "L") {
                result = result + 50;
            }
            else if (roman[i] == "C") {
                result = Algorithm.calculateC(roman, i, result);
            }
            else if (roman[i] == "D"){
                result = result + 500;
            }
            else if (roman[i] == "M"){
                result = result + 1000;
            }
        }
        return result;
    }


    static calculateC(roman, i, result) {
        if (roman[i + 1] == "D" || roman[i + 1] == "M") {
            result = result - 100;
        }
        else {
            result = result + 100;
        }
        return result;
    }

    static calculateX(roman, i, result) {
        if (roman[i + 1] == "L" || roman[i + 1] == "C") {
            result = result - 10;
        }
        else {
            result = result + 10;
        }
        return result;
    }

    static calculateI(roman, i, result) {
        if (roman[i + 1] == "V" || roman[i + 1] == "X") {
            result--;
        }
        else {
            result++;
        }
        return result;
    }
}