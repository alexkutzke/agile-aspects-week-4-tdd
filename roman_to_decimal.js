
var roman_values = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

export default function toInt(roman) {
  let decimalValue = 0

  
  for (let index = 0; index < roman.length; index++) {
    const currentLetter = roman[index]
    const currentNumeral = roman_values[currentLetter]

    if (index + 1 < roman.length) {
      const nextLetter = roman[index + 1]
      const nextNumeral = roman_values[nextLetter]
      if (currentNumeral < nextNumeral) {
        decimalValue -= currentNumeral
      } else {
        decimalValue += currentNumeral
      }
    } else {
      decimalValue += currentNumeral
    }
  }
  return decimalValue
}
