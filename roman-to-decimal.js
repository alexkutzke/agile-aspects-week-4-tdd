function romanToInt(romanNumStr) {
    const romanList = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let total = 0;
    for (let i=0; i<romanNumStr.length; i++) {
        const chVal = romanList[romanNumStr[i]];
        let chNextVal
        if (i+1 < romanNumStr.length) {
            // There is more chars
            chNextVal = romanList[romanNumStr[i+1]];
            if (chVal >= chNextVal) {
                total += chVal;
            } else {
                // Do reverse
                total += chNextVal-chVal
                i+=1
            }
        } else {
            // Last char
            total += chVal;
        }
    }
    return total
}

module.exports = romanToInt;