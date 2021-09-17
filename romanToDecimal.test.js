const romanToDecimal = require('./romanToDecimal');

test('I = 1'
, () => {
expect(romanToDecimal.conversion("I")).toEqual(1);
});

test('II = 2'
, () => {
expect(romanToDecimal.conversion("II")).toEqual(2);
});

test('III = 3'
, () => {
expect(romanToDecimal.conversion("III")).toEqual(3);
});

test('IV = 4'
, () => {
expect(romanToDecimal.conversion("IV")).toEqual(4);
});

test('V = 5'
, () => {
expect(romanToDecimal.conversion("V")).toEqual(5);
});

test('VI = 6'
, () => {
expect(romanToDecimal.conversion("VI")).toEqual(6);
});

test('VII = 7'
, () => {
expect(romanToDecimal.conversion("VII")).toEqual(7);
});

test('VIII = 8'
, () => {
expect(romanToDecimal.conversion("VIII")).toEqual(8);
});

test('IX = 9'
, () => {
expect(romanToDecimal.conversion("IX")).toEqual(9);
});

test('X = 10'
, () => {
expect(romanToDecimal.conversion("X")).toEqual(10);
});

test('XXXVI = 36'
, () => {
expect(romanToDecimal.conversion("XXXVI")).toEqual(36);
});

test('LV= 55'
, () => {
expect(romanToDecimal.conversion("LV")).toEqual(55);
});

test('LXXXVIII = 88'
, () => {
expect(romanToDecimal.conversion("LXXXVIII")).toEqual(88);
});

test('XCIX = 99'
, () => {
expect(romanToDecimal.conversion("XCIX")).toEqual(99);
});

test('CLXXVIII = 178'
, () => {
expect(romanToDecimal.conversion("CLXXVIII")).toEqual(178);
});

test('M = 1000'
, () => {
expect(romanToDecimal.conversion("M")).toEqual(1000);
});

test('MCXI = 1111'
, () => {
expect(romanToDecimal.conversion("MCXI")).toEqual(1111);
});

test('MDLV = 1555'
, () => {
expect(romanToDecimal.conversion("MDLV")).toEqual(1555);
});

test('MCMIV = 1904'
, () => {
expect(romanToDecimal.conversion("MCMIV")).toEqual(1904);
});

test('MCMXCVI = 1996'
, () => {
expect(romanToDecimal.conversion("MCMXCVI")).toEqual(1996);
});

test('MMXII = 2012'
, () => {
expect(romanToDecimal.conversion("MMXII")).toEqual(2012);
});