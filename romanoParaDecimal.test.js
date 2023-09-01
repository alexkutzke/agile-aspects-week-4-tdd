import { romanoParaDecimal } from "./romanoParaDecimal";

//SE NÃO TIVER RODANDO OS TESTES
//rm -rf node_modules package-lock.json && npm install && npm test

describe("Romano para Decimal", () => {
    test('Sem parâmetro retorna 0', () => {
        expect(romanoParaDecimal()).toEqual(0);
    });

    test('Parâmetro undefined retorna 0', () => {
        expect(romanoParaDecimal(undefined)).toEqual(0);
    });

    test('Parâmetro numérico retorna 0', () => {
        expect(romanoParaDecimal(1)).toEqual(0);
    });

    test('I é igual 1', () => {
        expect(romanoParaDecimal('I')).toEqual(1);
    });

    test('V é igual 5', () => {
        expect(romanoParaDecimal('V')).toEqual(5);
    });

    test('X é igual 10', () => {
        expect(romanoParaDecimal('X')).toEqual(10);
    });

    test('L é igual 50', () => {
        expect(romanoParaDecimal('L')).toEqual(50);
    });

    test('C é igual 100', () => {
        expect(romanoParaDecimal('C')).toEqual(100);
    });

    test('D é igual 500', () => {
        expect(romanoParaDecimal('D')).toEqual(500);
    });

    test('M é igual 1000', () => {
        expect(romanoParaDecimal('M')).toEqual(1000);
    });

    test('IX é igual 9', () => {
        expect(romanoParaDecimal('IX')).toEqual(9);
    });

    test('XCIX é igual 99', () => {
        expect(romanoParaDecimal('XCIX')).toEqual(99);
    });

    test('CMXCIX é igual 999', () => {
        expect(romanoParaDecimal('CMXCIX')).toEqual(999);
    });
});