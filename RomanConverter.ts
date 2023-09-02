class RomanConverter {
  private romanNumerals: Record<string, number> = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  public convert(roman: string): number {
    roman = roman.toUpperCase();

    if (/[^IVXLCDM]/.test(roman)) {
      throw new Error("Invalid Roman numeral");
    }

    let result = 0;
    let i = 0;

    while (i < roman.length) {
      const currentSymbol = roman[i];
      const nextSymbol = roman[i + 1];

      if (nextSymbol && this.romanNumerals[currentSymbol + nextSymbol]) {
        result += this.romanNumerals[currentSymbol + nextSymbol];
        i += 2;
      } else {
        result += this.romanNumerals[currentSymbol];
        i += 1;
      }
    }

    return result;
  }
}

export default RomanConverter;
