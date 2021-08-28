import {
    RomanSymbols,
    RomanSymbolsAllowedReduction,
    RomanSymbolsRepeatCount,
  } from "./roman-symbols-enum";
  
  export class RomanToDecimal {
    romanToDecimalValues(romanValue) {
      return RomanSymbols[romanValue];
    }
  
    charsRomanValue = [];
  
    sumDecimalValue = 0;
    lastDecimalValue = 0;
    countSubtractDecimalValue = 0;
  
    convert(romanValue) {
      if (!romanValue) {
        return 0;
      }
      this.validateValue(romanValue);
      return this.getDecimalValue(romanValue);
    }
  
    validateValue(romanValue) {
      this.validateType(romanValue);
      this.mapChars(romanValue);
      this.validateAllChars();
      this.validateRepeatCharns();
    }
  
    validateType(romanValue) {
      if (typeof romanValue !== "string") {
        throw new Error("Invalid Param Type");
      }
    }
  
    mapChars(romanValue) {
      this.charsRomanValue = romanValue.split("");
    }
  
    validateAllChars() {
      const hasInvalidChar = this.charsRomanValue.some(
        (charValue) => !Object.keys(RomanSymbols).includes(charValue)
      );
      if (hasInvalidChar) {
        throw new Error("Invalid Roman Value");
      }
    }
  
    validateRepeatCharns() {
      let lastLetter = "";
      let count = 1;
      this.charsRomanValue.forEach((letter) => {
        let maxCount = RomanSymbolsRepeatCount[letter];
        if (letter === lastLetter) {
          count++;
        } else {
          count = 1;
          lastLetter = letter;
        }
  
        if (count > maxCount) {
          throw new Error("Invalid Roman value");
        }
      });
    }
  
    getDecimalValue() {
      this.charsRomanValue.reverse().forEach((letterRoman) => {
        this.processLetterRoman(letterRoman);
      });
      return this.sumDecimalValue;
    }
  
    processLetterRoman(letterRoman) {
      const currentValue = this.romanToDecimalValues(letterRoman);
  
      if (currentValue > this.lastDecimalValue) {
        this.sumDecimalValue += currentValue;
        this.countSubtractDecimalValue = 0;
      } else if (currentValue === this.lastDecimalValue) {
        if (this.countSubtractDecimalValue > 0) {
          throw new Error("Invalid Roman value");
        } else {
          this.sumDecimalValue += currentValue;
          this.countSubtractDecimalValue = 0;
        }
      } else {
        if (!RomanSymbolsAllowedReduction.includes(letterRoman)) {
          throw new Error("Invalid Roman value");
        }
        this.countSubtractDecimalValue++;
        this.sumDecimalValue -= currentValue;
      }
  
      if (this.countSubtractDecimalValue > 1) {
        throw new Error("Invalid Roman value");
      }
  
      this.lastDecimalValue = currentValue;
    }
  }
  