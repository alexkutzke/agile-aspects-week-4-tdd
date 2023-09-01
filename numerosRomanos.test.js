import {romanToDec} from './numerosRomanos';

describe("RomanToDecimal", () => {
    test('1 nao é igual II', () => {
        expect(romanToDec('II')).toEqual(2);
    })
});

describe("RomanToDecimal", () => {
    test('666 é igual DCLXVI', () => {
        expect(romanToDec('DCLXVI')).toEqual(666);
    })
});


describe("RomanToDecimal", () => {
    test('1666 é igual MDCLXVI', () => {
        expect(romanToDec('MDCLXVI')).toEqual(1666);
    })
});

describe("RomanToDecimal", () => {
    test('Nada é igual Nada', () => {
        expect(romanToDec('')).toEqual(0);
    })
});

describe("RomanToDecimal", () => {
    test('157 é igual CLVII', () => {
        expect(romanToDec('CLVII')).toEqual(157);
    })
});

describe("RomanToDecimal", () => {
    test('qualquer outro char é igual 0', () => {
        expect(romanToDec('a')).toEqual(0);
    })
});

describe("RomanToDecimal", () => {
    test('Null é igual 0', () => {
        expect(romanToDec(null)).toEqual(0);
    })
});

describe("RomanToDecimal", () => {
    test('Undefined é igual 0', () => {
        expect(romanToDec('undefined')).toEqual(0);
    })
});

describe("RomanToDecimal", () => {
    test('CARLINHO é igual 0', () => {
        expect(romanToDec('CARLINHO')).toEqual(0);
    })
});

describe("RomanToDecimal", () => {
    test('D é igual 500', () => {
        expect(romanToDec('D')).toEqual(500);
    })
});


