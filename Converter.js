class Converter {
  
  constructor(){

  }

  isFilledNumber(romanNumber){
    return romanNumber != null && romanNumber != undefined && romanNumber != '';
  }
  
  isValidCharacters(romanNumber){
    let isValid = true;
    const acceptedRomanNumbers = this.getAcceptedRomanNumbers();
  
    for(let i = 0; i < romanNumber.length; i ++){
      let character = romanNumber.substring(i, i+1);
  
      if(!acceptedRomanNumbers.has(character)){
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
    const acceptedRomanNumbers = this.getAcceptedRomanNumbers();
    let total = 0;

    for(let i = 0; i < romanNumber.length; i ++){
      let actualCharacter = romanNumber.substring(i, i+1);
      let nextCharacter;
      if(romanNumber.length > 1)
        nextCharacter = romanNumber.substring(i+1, i+2);

      if(romanNumber.length == 1)
        total = acceptedRomanNumbers.get(romanNumber.substring(i, i+1));
      else {
        if(nextCharacter <= actualCharacter)
          total += acceptedRomanNumbers.get(romanNumber.substring(i, i+1));
        else
          total -= acceptedRomanNumbers.get(romanNumber.substring(i, i+1));
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