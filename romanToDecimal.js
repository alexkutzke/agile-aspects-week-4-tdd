const allRomanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

function romanToDecimal (romanNumber) {
    if(romanNumber == null) return null;

    var countNumber = allRomanNumbers[romanNumber.charAt(0)];

    var numberLeft;

    var numberCurrent;

    for (let index = 1; index < romanNumber.length; index++) {
      numberCurrent = romanNumber.charAt(index);

      numberLeft = romanNumber.charAt(index -1)

      if(allRomanNumbers[numberCurrent] <= allRomanNumbers[numberLeft]){
        countNumber += allRomanNumbers[numberCurrent];
      }
      else{
        countNumber = countNumber - allRomanNumbers[numberLeft]*2 + allRomanNumbers[numberCurrent];
      }
    }
    
    return countNumber;
    
  }
  
 export default romanToDecimal;
 

