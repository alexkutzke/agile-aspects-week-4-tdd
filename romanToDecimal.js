const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export default function romanToDecimal(romanToConvert) {
  let result = 0;
  romanToConvert = romanToConvert.toUpperCase();
  romanToConvert = romanToConvert.trim();

  for (let index = 0; index < romanToConvert.length; index++) {
    const currentSymbol = romanToConvert[index];
    const currentValue = romanValues[currentSymbol];
    const nextSymbol = romanToConvert[index + 1];
    const nextValue = romanValues[nextSymbol];

    const nextValueIsBigger = nextValue && currentValue < nextValue;
    if (nextValueIsBigger) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
}