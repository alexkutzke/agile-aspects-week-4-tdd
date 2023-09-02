import ConvertRomanNumbersIntoDecimal from './ConvertRomanNumbersIntoDecimal'
import MyErrors from './utils/errors/MyErrors'

describe('Class ConvertRomanNumbersIntoDecimal', () => {
  let convertRomanNumbersIntoDecimal;

  beforeEach(() => {
    convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal();
  });

  describe('Single Roman Characters', () => {
    test('should convert "I" to 1', () => {
      expect(convertRomanNumbersIntoDecimal.convert('I')).toBe(1)
    })

    test('should convert "V" to 5', () => {
      expect(convertRomanNumbersIntoDecimal.convert('V')).toBe(5)
    })

    test('should convert "X" to 10', () => {
      expect(convertRomanNumbersIntoDecimal.convert('X')).toBe(10)
    })

    test('should convert "L" to 50', () => {
      expect(convertRomanNumbersIntoDecimal.convert('L')).toBe(50)
    })

    test('should convert "C" to 100', () => {
      expect(convertRomanNumbersIntoDecimal.convert('C')).toBe(100)
    })

    test('should convert "D" to 500', () => {
      expect(convertRomanNumbersIntoDecimal.convert('D')).toBe(500)
    })

    test('should convert "M" to 1000', () => {
      expect(convertRomanNumbersIntoDecimal.convert('M')).toBe(1000)
    })
  })

  describe('Summation of Roman Characters', () => {
    test.each([
      ['II', 2],
      ['III', 3],
      ['VII', 7],
      ['VIII', 8],
      ['XII', 12]
    ])

      ('should correctly convert the Roman number %s to the decimal number %i', (roman, decimal) => {
        expect(convertRomanNumbersIntoDecimal.convert(roman)).toBe(decimal);
      });
  });

  describe('Subtraction Cases', () => {
    test.each([
      ['IV', 4],
      ['IX', 9],
      ['XL', 40],
      ['XC', 90],
      ['CD', 400],
      ['CM', 900]
    ])
      ('should correctly convert the Roman number %s to the decimal number %i', (roman, decimal) => {
        expect(convertRomanNumbersIntoDecimal.convert(roman)).toBe(decimal)
      })
  });

  describe('Error Handling', () => {

    test('should throw an error for invalid characters', () => {
      expect(() => convertRomanNumbersIntoDecimal.convert('Z')).toThrowError(MyErrors)
    });

    test('should throw an error for empty string', () => {
      expect(() => convertRomanNumbersIntoDecimal.convert('')).toThrowError(MyErrors)
    });

    test('should throw an error for null input', () => {
      expect(() => convertRomanNumbersIntoDecimal.convert(null)).toThrowError(MyErrors)
    });

  });
})
