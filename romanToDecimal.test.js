const romanToDecimal = require('./romanToDecimal');

test('Converte "IV" para 4', () => {
  expect(romanToDecimal('IV')).toBe(4);
});

test('Converte "IX" para 9', () => {
  expect(romanToDecimal('IX')).toBe(9);
});

test('Converte "LVIII" para 58', () => {
  expect(romanToDecimal('LVIII')).toBe(58);
});

test('Converte "MCMXCIV" para 1994', () => {
  expect(romanToDecimal('MCMXCIV')).toBe(1994);
});

test('Converte "XX" para 20', () => {
  expect(romanToDecimal('XX')).toBe(20);
});

test('Converte "L" para 50', () => {
  expect(romanToDecimal('L')).toBe(50);
});

test('Converte "IX" para 9', () => {
  expect(romanToDecimal('IX')).toBe(9);
});