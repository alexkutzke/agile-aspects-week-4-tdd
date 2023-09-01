import ConvertRomanNumbersIntoDecimal from './ConvertRomanNumbersIntoDecimal'
import { MyErrors } from './utils/errors/MyErrors'

describe('Class ConvertRomanNumbersIntoDecimal', () => {
  test('should display an error if the given number isnt "L" or "V"', () => {
    const convertRomanNumbersIntoDecimal = new ConvertRomanNumbersIntoDecimal()
    expect(() => { convertRomanNumbersIntoDecimal.convert('Q') }).toThrow(MyErrors)
  })
})
