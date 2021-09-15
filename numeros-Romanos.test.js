import NumeralRomano from './numerosRomanos'


test('I = 1'
    , () => {
        expect(NumeralRomano.convertToDecimals("I")).toEqual(1);
    });

test('III = 3'
    , () => {
        expect(NumeralRomano.convertToDecimals("III")).toEqual(3);
    });

test('VII = 7'
    , () => {
        expect(NumeralRomano.convertToDecimals("VII")).toEqual(7);
    });

test('XXXVI = 36'
    , () => {
        expect(NumeralRomano.convertToDecimals("XXXVI")).toEqual(36);
    });

test('LV= 55'
    , () => {
        expect(NumeralRomano.convertToDecimals("LV")).toEqual(55);
    });

test('LXXXIX = 89'
    , () => {
        expect(NumeralRomano.convertToDecimals("LXXXIX")).toEqual(89);
    });

test('MCXIII = 1113'
    , () => {
        expect(NumeralRomano.convertToDecimals("MCXIII")).toEqual(1113);
    });

test('DCCCLXXXV = 885'
    , () => {
        expect(NumeralRomano.convertToDecimals("DCCCLXXXV")).toEqual(885);
    });

test('M = 1000'
    , () => {
        expect(NumeralRomano.convertToDecimals("M")).toEqual(1000);
    });

test('M = 2000'
    , () => {
        expect(NumeralRomano.convertToDecimals("MM")).toEqual(2000);
    });

test('MCCXCIX = 1299'
    , () => {
        expect(NumeralRomano.convertToDecimals("MCCXCIX")).toEqual(1299);
    });

test('MD = 1500'
    , () => {
        expect(NumeralRomano.convertToDecimals("MD")).toEqual(1500);
    });

test('MDCCC = 1800'
    , () => {
        expect(NumeralRomano.convertToDecimals("MDCCC")).toEqual(1800);
    });

test('MMCCXXII = 2222'
    , () => {
        expect(NumeralRomano.convertToDecimals("MMCCXXII")).toEqual(2222);
    });

test('MMCDLI = 2450'
    , () => {
        expect(NumeralRomano.convertToDecimals("MMCDL")).toEqual(2450);
    });

test('MMMCMXCVIII = 3998'
    , () => {
        expect(NumeralRomano.convertToDecimals("MMMCMXCVIII")).toEqual(3998);
    });