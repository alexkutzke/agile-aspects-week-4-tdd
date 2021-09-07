const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

class ConvertRoman{
    constructor(romanNumber){
        this.romanNumber = romanNumber;
    }

    convert(){
        let decimalNumber = 0;
        let prevRomanDigit = ' ';
        let prevDecimalDigit = 0;
        
        for (let i = this.romanNumber.length -1; i >= 0; i--) {
            const romanDigit = this.romanNumber[i];
            
            if(prevRomanDigit !== ' '){
                prevDecimalDigit = romanValues[prevRomanDigit] > prevDecimalDigit ? romanValues[prevRomanDigit] : prevDecimalDigit;
            }

            const currentNum = romanValues[romanDigit];
            if(currentNum>=prevDecimalDigit){
                decimalNumber += currentNum;
            }else{
                decimalNumber -= currentNum;
            }

            prevRomanDigit = romanDigit;
        }
        
        return decimalNumber;
    }
}
export default ConvertRoman; 
 
