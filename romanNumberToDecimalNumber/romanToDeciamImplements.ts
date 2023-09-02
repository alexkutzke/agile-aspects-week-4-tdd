const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  function romanToDecimal(s) {
    if (typeof s !== 'string' || s === '') {
      throw new Error('Entrada inválida: insira um numeral romano válido.');
    }
  
    let decimalValue = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const char = s[i];
      const value = romanValues[char];
  
      if (!value) {
        throw new Error('Entrada inválida: caractere não reconhecido em numeral romano.');
      }
  
      if (value >= prevValue) {
        decimalValue += value;
      } else {
        decimalValue -= value;
      }
  
      prevValue = value;
    }
  
    return decimalValue;
  }
  
  export default romanToDecimal;
  