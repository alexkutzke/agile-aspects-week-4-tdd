
const convertRomanToDecimal = require('./convertRomanToDecimal')

test('Testing conversion  a roman value I to Decimal 1', () => {

    expect(convertRomanToDecimal('I')).toEqual(1)
});

test('Testing conversion  a roman value IV to Decimal 4', () => {

    expect(convertRomanToDecimal('IV')).toEqual(4)
});

test('Testing conversion  a roman value VIII to Decimal 8', () => {

    expect(convertRomanToDecimal('VIII')).toEqual(8)
});


test('Testing conversion  a roman value VIII to Decimal 8', () => {

    expect(convertRomanToDecimal('VIII')).toEqual(8)
});


test('Testing conversion  a roman value XVIII to Decimal 18', () => {

    expect(convertRomanToDecimal('XVIII')).toEqual(18)
});


test('Testing conversion  a roman value DCLIX to Decimal 659', () => {

    expect(convertRomanToDecimal('DCLIX')).toEqual(659)
});

test('Testing conversion  a roman value DCCLXXIX to Decimal 779', () => {

    expect(convertRomanToDecimal('DCCLXXIX')).toEqual(779)
});

test('Testing conversion  a roman value MMMDCCCLXXXIVIII to Decimal 388', () => {

    expect(convertRomanToDecimal('MMMDCCCLXXXIVIII')).toEqual(3887)
});


 test('Testing if value R is not a Roman Number', () => {

    expect(() => convertRomanToDecimal('CLXIRI')).toThrow('Is Char not a Roman Number!')
});


 test('Testing if value A  is not a Roman Number', () => {

    expect(() => convertRomanToDecimal('CLXIAI')).toThrow('Is Char not a Roman Number!')
});


 test('Testing if value H is not a Roman Number', () => {

    expect(() => convertRomanToDecimal('CLHIVI')).toThrow('Is Char not a Roman Number!')
});


 test('Testing if value Z is not a Roman Number', () => {

    expect(() => convertRomanToDecimal('CZXIII')).toThrow('Is Char not a Roman Number!')
});


 test('Testing if value N is not a Roman Number', () => {

    expect(() => convertRomanToDecimal('NLXINI')).toThrow('Is Char not a Roman Number!')
});
