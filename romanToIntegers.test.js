//testes

import RomanConverter from './romanToIntegers'

test('I equals 1', () => {
    expect(RomanConverter.toInteger('I')).toEqual(1)
})

test('V equals 5', () => {
    expect(RomanConverter.toInteger('V')).toEqual(5)
})

test('X equals 10', () => {
    expect(RomanConverter.toInteger('X')).toEqual(10)
})

test('L equals 50', () => {
    expect(RomanConverter.toInteger('L')).toEqual(50)
})

test('C equals 100', () => {
    expect(RomanConverter.toInteger('C')).toEqual(100)
})

test('D equals 500', () => {
    expect(RomanConverter.toInteger('D')).toEqual(500)
})

test('M equals 1000', () => {
    expect(RomanConverter.toInteger('M')).toEqual(1000)
})

test('lower x equals 10', () => {
    expect(RomanConverter.toInteger('x')).toEqual(10)
})

test('lower m equals 1000', () => {
    expect(RomanConverter.toInteger('m')).toEqual(1000)
})

test('III equals 3', () => {
    expect(RomanConverter.toInteger('III')).toEqual(3)
})

test('IV equals 4', () => {
    expect(RomanConverter.toInteger('IV')).toEqual(4)
})

test('IX equals 9', () => {
    expect(RomanConverter.toInteger('IX')).toEqual(9)
})

test('VIII equals 8', () => {
    expect(RomanConverter.toInteger('VIII')).toEqual(8)
})

test('XIII equals 13', () => {
    expect(RomanConverter.toInteger('XIII')).toEqual(13)
})

test('XXXIII equals 33', () => {
    expect(RomanConverter.toInteger('XXXIII')).toEqual(33)
})

test('XXXIX equals 39', () => {
    expect(RomanConverter.toInteger('XXXIX')).toEqual(39)
})

test('XXXIX equals 87', () => {
    expect(RomanConverter.toInteger('LXXXVII')).toEqual(87)
})

test('LXXXIX equals 89', () => {
    expect(RomanConverter.toInteger('LXXXIX')).toEqual(89)
})

test('CM equals 900', () => {
    expect(RomanConverter.toInteger('CM')).toEqual(900)
})
