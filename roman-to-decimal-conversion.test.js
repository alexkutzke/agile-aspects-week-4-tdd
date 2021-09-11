const romanToInt = require('./roman-to-decimal-conversion');

test('I equals 1', () => {
    expect(romanToInt('I')).toEqual(1)
})

test('II equals 5', () => {
    expect(romanToInt('V')).toEqual(5)
})

test('III equals 10', () => {
    expect(romanToInt('X')).toEqual(10)
})

test('IV equals 50', () => {
    expect(romanToInt('L')).toEqual(50)
})

test('V equals 100', () => {
    expect(romanToInt('C')).toEqual(100)
})

test('VI equals 500', () => {
    expect(romanToInt('D')).toEqual(500)
})


test('M equals 1000', () => {
    expect(romanToInt('M')).toEqual(1000)
}) 






 