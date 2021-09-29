const RomanToDecimal = require('./roman-to-decimal');

test('XII should be equal to 12', () => {
    expect(RomanToDecimal.convert('XII')).toEqual(12);
})

test('IX should be equal to 9', () => {
    expect(RomanToDecimal.convert('IX')).toBe(9);
})

test('MDLII should be equal to 1552', () => {
    expect(RomanToDecimal.convert('MDLII')).toBe(1552);
})

test('MMXXI should be equal to 2021', () => {
    expect(RomanToDecimal.convert('MMXXI')).toBe(2021);
})