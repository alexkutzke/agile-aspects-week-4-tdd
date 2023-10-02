const romanToDecimal = require('../src/romanToDecimal');

test('Converte "IV" para 4', () => {
  expect(romanToDecimal('IV')).toBe(4);
});

test('Converte "IX" para 9', () => {
  expect(romanToDecimal('IX')).toBe(9);
});

test('Converte "XXI" para 21', () => {
  expect(romanToDecimal('XXI')).toBe(21);
});