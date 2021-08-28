class convertRomanNumbers 
{
    static romanToDecimal ( romanNumber ) 
    {
        
        var symbolValues =
        {
            "I":1,"IV":4,"V":5,"IX":9,"X":10,"XL":40,"L":50,"XC":90,"C":100,"CD":400,"D":500,"CM":900,"M":1000
        }
          
        var romanSymbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"] 
        var initialSlice = 0
        var finalSlice = 1
        var decimalNumber = 0
          
        while (finalSlice <= romanNumber.length) 
        {
            for(var i in romanSymbols)
            {
                if( romanNumber.slice(initialSlice,finalSlice) === romanSymbols[i] )
                {
                    decimalNumber+=symbolValues[romanSymbols[i]]
                    initialSlice+=1
                    finalSlice+=1
                    { break; }
                }
                else
                {
                    if(romanNumber.slice(initialSlice,finalSlice+1)===romanSymbols[i])
                    {
                        decimalNumber+=symbolValues[romanSymbols[i]]
                        initialSlice+=2
                        finalSlice+=2
                        { break; }
                    }
                }
                
            }
        }
        return decimalNumber 
    }
}

module.exports = convertRomanNumbers;
    