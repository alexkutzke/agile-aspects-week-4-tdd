
import romanToDecimal from './romanToDeciamImplements';

expect(romanToDecimal('I')).toBe(1);
expect(romanToDecimal('IV')).toBe(4);
expect(romanToDecimal('IX')).toBe(9);
expect(romanToDecimal('XIV')).toBe(14)
expect(romanToDecimal('MMMCMXCIX')).toBe(3999);
expect(romanToDecimal('CXL')).toBe(140);

test('Lida com entradas inválidas', () => {
  try {
    romanToDecimal('');
  } catch (error) {
    expect(error.message).toBe('Entrada inválida: insira um numeral romano válido.');
  }

  try {
    romanToDecimal('ABC');
  } catch (error) {
    expect(error.message).toBe('Entrada inválida: caractere não reconhecido em numeral romano.');
  }

  try {
    romanToDecimal('IL');
  } catch (error) {
    expect(error.message).toBe('Entrada inválida: caractere não reconhecido em numeral romano.');
  }
});





