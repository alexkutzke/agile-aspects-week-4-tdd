const letterValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

class RomanConverter{
    
    static toInteger(romanNumber){
	const sum = this.sumValues(romanNumber)
	return sum
    }

    static sumValues(romanNumber){
	let sum = 0
	if (romanNumber.length>1){
	    let i = 0
	    while(i<romanNumber.length){	
		if (this.isNextRomanMinor(romanNumber, i)){
		    sum += letterValues[romanNumber[i+1]] - letterValues[romanNumber[i]]
		    i += 2
		}
		else{
		    if(this.isNextRomanMinor(romanNumber, i+1)){
			sum += (letterValues[romanNumber[i+2]] - letterValues[romanNumber[i+1]]) + letterValues[romanNumber[i]]
			i += 3
		    }
		    else{
			sum += letterValues[romanNumber[i]]
			i += 1
		    }
		}  
	    }
	}
	else{
	    sum += letterValues[romanNumber.toUpperCase()]
	}
	return sum
    }

    static isNextRomanMinor(romanNumber, index){
	return letterValues[romanNumber[index]] < letterValues[romanNumber[index+1]]
    }
}

export default RomanConverter
