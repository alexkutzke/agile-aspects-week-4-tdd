class Converter {

  isFilledNumber(romanNumber){
    return romanNumber != null && romanNumber != undefined && romanNumber != '';
  }
  
  isValidCharacters(romanNumber){
    let isValid = true;

    for(let i = 0; i < romanNumber.length; i ++){
      let character = romanNumber.substring(i, i+1);
  
      if(!this.getAcceptedRomanNumbers().has(character)){
        isValid = false;
      }
    }
  
    return isValid;
  }
  
  isValidInputRomanNumber(romanNumber){
    return (this.isFilledNumber(romanNumber) && this.isValidCharacters(romanNumber));
  }
  
  romanConverter(romanNumber) { 
    let decimalValue = null;

    if(this.isValidInputRomanNumber(romanNumber)){
      decimalValue = this.calculateDecimalNumber(romanNumber);
    }
    
    return decimalValue;
  }
  
  calculateDecimalNumber(romanNumber){
    let total = 0;

    for(let i = 0; i < romanNumber.length; i++){
      let currentNumber = romanNumber[i];
      let currentNumberConverted = this.getAcceptedRomanNumbers().get(currentNumber);

      if(i + 1 < romanNumber.length) {
        let nextNumber = romanNumber[i+1];
        let nextNumberConverted = this.getAcceptedRomanNumbers().get(nextNumber);

        if(currentNumberConverted >= nextNumberConverted) {
          total += currentNumberConverted;
        }else{
          total -= currentNumberConverted;
        }
      }else{
        total += currentNumberConverted;
      }
    }

    return total;
  }

  getAcceptedRomanNumbers(){
    let acceptedRomanNumbers = new Map();

    acceptedRomanNumbers.set("I", 1);
    acceptedRomanNumbers.set("V", 5);
    acceptedRomanNumbers.set("X", 10);
    acceptedRomanNumbers.set("L", 50);
    acceptedRomanNumbers.set("C", 100);
    acceptedRomanNumbers.set("D", 500);
    acceptedRomanNumbers.set("M", 1000);
  
    return acceptedRomanNumbers;
  }
}

export { Converter };