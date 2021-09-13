import RomanNumeral from './roman-numeral';

test('I = 1'
, () => {
    expect(RomanNumeral.convertToDecimals("I")).toEqual(1);
});

test('III = 3'
, () => {
expect(RomanNumeral.convertToDecimals("III")).toEqual(3);
}); 

test('VII = 7'
, () => {
expect(RomanNumeral.convertToDecimals("VII")).toEqual(7);
});

test('XXXVI = 36'
, () => {
expect(RomanNumeral.convertToDecimals("XXXVI")).toEqual(36);
});

test('LV= 55'
, () => {
expect(RomanNumeral.convertToDecimals("LV")).toEqual(55);
});

test('LXXXIX = 89'
, () => {
expect(RomanNumeral.convertToDecimals("LXXXIX")).toEqual(89);
});

test('MCXIII = 1113'
, () => {
expect(RomanNumeral.convertToDecimals("MCXIII")).toEqual(1113);
});

test('DCCCLXXXV = 885'
, () => {
expect(RomanNumeral.convertToDecimals("DCCCLXXXV")).toEqual(885);
});

test('M = 1000'
, () => {
expect(RomanNumeral.convertToDecimals("M")).toEqual(1000);
});

test('M = 2000'
, () => {
expect(RomanNumeral.convertToDecimals("MM")).toEqual(2000);
});

test('MCCXCIX = 1299'
, () => {
expect(RomanNumeral.convertToDecimals("MCCXCIX")).toEqual(1299);
});

test('MD = 1500'
, () => {
expect(RomanNumeral.convertToDecimals("MD")).toEqual(1500);
});

test('MDCCC = 1800'
, () => {
expect(RomanNumeral.convertToDecimals("MDCCC")).toEqual(1800);
});

test('MMCCXXII = 2222'
, () => {
expect(RomanNumeral.convertToDecimals("MMCCXXII")).toEqual(2222);
});

test('MMCDLI = 2450'
, () => {
expect(RomanNumeral.convertToDecimals("MMCDL")).toEqual(2450);
});

test('MMMCMXCVIII = 3998'
, () => {
expect(RomanNumeral.convertToDecimals("MMMCMXCVIII")).toEqual(3998);
});
