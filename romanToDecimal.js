function romanToDecimal(romanNumero) {
    
  const romanNumerals = {
    I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8,
    IX: 9, X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15,
    XVI: 16, XVII: 17, XVIII: 18, IXX: 19, XX: 20, L: 50,
    C: 100, D: 500, M: 1000,
  };

  let numeroDecimal = 0;

  for (let i = 0; i < romanNumero.length; i++) {
    const currentSymbol = romanNumero[i];
    const currentValue = romanNumerals[currentSymbol];
    const nextSymbol = romanNumero[i + 1];
    const nextValue = romanNumerals[nextSymbol];

    if (nextValue > currentValue) {
      numeroDecimal += nextValue - currentValue;
      i++; // Pula o próximo caractere (símbolo)
    } else {
      numeroDecimal += currentValue;
    }
  }

  return numeroDecimal;
}

module.exports = romanToDecimal;