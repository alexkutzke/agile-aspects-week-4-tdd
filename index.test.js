const RomanToDecimal = require('./romanToDecimal');

describe('RomanToDecimal', () => {
  let converter;

  beforeEach(() => {
    converter = new RomanToDecimal();
  });

  it('should convert Roman numerals to decimals', () => {
    expect(converter.convert('I')).toBe(1);
    expect(converter.convert('IV')).toBe(4);
    expect(converter.convert('IX')).toBe(9);
    expect(converter.convert('XXI')).toBe(21);
    expect(converter.convert('LVIII')).toBe(58);
    expect(converter.convert('MCMXCIV')).toBe(1994);
    expect(converter.convert('MMMCMXCIV')).toBe(3994);
  });

  it('should throw an error for invalid input', () => {
    expect(() => converter.convert(123)).toThrow('Input should be a string');
    expect(() => converter.convert('ABC')).toThrow('Invalid Roman numeral');
  });
});