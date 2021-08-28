const convertRomanNumbers = require('./convertRomanNumbers');

test('I = 1'
, () => {
expect(convertRomanNumbers.romanToDecimal("I")).toEqual(1);
});

test('IV = 4'
, () => {
expect(convertRomanNumbers.romanToDecimal("IV")).toEqual(4);
});

test('MCMXCVI = 1996'
, () => {
expect(convertRomanNumbers.romanToDecimal("MCMXCVI")).toEqual(1996);
});

test('IX = 9'
, () => {
expect(convertRomanNumbers.romanToDecimal("IX")).toEqual(9);
});

test('MCMIV = 1904'
, () => {
expect(convertRomanNumbers.romanToDecimal("MCMIV")).toEqual(1904);
});

test('M = 1000'
, () => {
expect(convertRomanNumbers.romanToDecimal("M")).toEqual(1000);
});

test('XCIX = 99'
, () => {
expect(convertRomanNumbers.romanToDecimal("XCIX")).toEqual(99);
});

test('XXXVI = 36'
, () => {
expect(convertRomanNumbers.romanToDecimal("XXXVI")).toEqual(36);
});

test('MMXII = 2012'
, () => {
expect(convertRomanNumbers.romanToDecimal("MMXII")).toEqual(2012);
});

test('CLXXVIII = 178'
, () => {
expect(convertRomanNumbers.romanToDecimal("CLXXVIII")).toEqual(178);
});

test('LXXXIX = 89'
, () => {
expect(convertRomanNumbers.romanToDecimal("LXXXIX")).toEqual(89);
});

test('LV= 55'
, () => {
expect(convertRomanNumbers.romanToDecimal("LV")).toEqual(55);
});

test('MDLV = 1555'
, () => {
expect(convertRomanNumbers.romanToDecimal("MDLV")).toEqual(1555);
});



test('MMCDXLIV = 2444'
, () => {
expect(convertRomanNumbers.romanToDecimal("MMCDXLIV")).toEqual(2444);
});

test('MMCDLI = 2451'
, () => {
expect(convertRomanNumbers.romanToDecimal("MMCDLI")).toEqual(2451);
});

test('MCXI = 1111'
, () => {
expect(convertRomanNumbers.romanToDecimal("MCXI")).toEqual(1111);
});

test('XXXVIII = 38'
, () => {
expect(convertRomanNumbers.romanToDecimal("XXXVIII")).toEqual(38);
});

test('LXXXVIII = 88'
, () => {
expect(convertRomanNumbers.romanToDecimal("LXXXVIII")).toEqual(88);
});

test('CCC = 300'
, () => {
expect(convertRomanNumbers.romanToDecimal("CCC")).toEqual(300);
});

test('III = 3'
, () => {
expect(convertRomanNumbers.romanToDecimal("III")).toEqual(3);
});