const RomanToDec = require('./romanToDec');

describe('Romano Para Decimal', () => {
  let converter;

  beforeEach(() => {
    converter = new RomanToDec();
  });

  it('should convert Romanos para Decimais', () => {
    expect(converter.convert('I')).toBe(1);
    expect(converter.convert('IV')).toBe(4);
    expect(converter.convert('XXII')).toBe(22);
  });

  it('should throw an error for invalid input', () => {
    expect(() => converter.convert(123)).toThrow('Input should be a string');
    expect(() => converter.convert('ABC')).toThrow('Invalid Roman numeral');
  });
});