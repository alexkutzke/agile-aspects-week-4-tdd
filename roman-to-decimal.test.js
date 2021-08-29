
const romanToInt = require('./roman-to-decimal');

test('I equals 1', () => {
    expect(romanToInt('I')).toEqual(1)
})

test('II equals 2', () => {
    expect(romanToInt('II')).toEqual(2)
})

test('III equals 3', () => {
    expect(romanToInt('III')).toEqual(3)
})

test('IV equals 4', () => {
    expect(romanToInt('IV')).toEqual(4)
})

test('V equals 5', () => {
    expect(romanToInt('V')).toEqual(5)
})

test('VI equals 6', () => {
    expect(romanToInt('VI')).toEqual(6)
})

test('VII equals 7', () => {
    expect(romanToInt('VII')).toEqual(7)
})

test('VIII equals 8', () => {
    expect(romanToInt('VIII')).toEqual(8)
})

test('IX equals 9', () => {
    expect(romanToInt('IX')).toEqual(9)
})

test('X equals 10', () => {
    expect(romanToInt('X')).toEqual(10)
})

test('XI equals 11', () => {
    expect(romanToInt('XI')).toEqual(11)
})

test('XL equals 40', () => {
    expect(romanToInt('XL')).toEqual(40)
})

test('MDLX equals 40', () => {
    expect(romanToInt('MDLXII')).toEqual(1562)
})