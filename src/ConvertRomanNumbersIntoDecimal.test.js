import ConvertRomanNumbersIntoDecimal from './ConvertRomanNumbersIntoDecimal'
import { MyErrors } from './utils/errors/MyErrors'

describe('Class ConvertRomanNumbersIntoDecimal', () => {

  describe('Single Roman Characters', () => {
    test('should convert "I" to 1', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('I')).toBe(1)
    })

    test('should convert "V" to 5', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('V')).toBe(5)
    })

    test('should convert "X" to 10', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('X')).toBe(10)
    })

    test('should convert "L" to 50', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('L')).toBe(50)
    })

    test('should convert "C" to 100', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('C')).toBe(100)
    })

    test('should convert "D" to 500', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
      expect(convertRomanNumbersIntoDecimal.convert('D')).toBe(500)
    })

    test('should convert "M" to 1000', () => {
      const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
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
        const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal();
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
        const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
        expect(convertRomanNumbersIntoDecimal.convert(roman)).toBe(decimal)
      })
  });
})
