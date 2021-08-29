import { expect, test } from "@jest/globals";
import { Algorithm } from "./Algorithm";

describe('Roman Numeral do Decimal', () => { 
    
    describe('I to X', () => { //1 to 10
        test('if romanToDecimal exists', () => {
            expect(Algorithm.romanToDecimal('')).not.toBeNull();
        });

        test('should return 1 for "I" ', () => {
            expect(Algorithm.romanToDecimal('I')).toEqual(1);
        });

        test('should return 2 for "II" ', () => {
            expect(Algorithm.romanToDecimal('II')).toEqual(2);
        });

        test('should return 3 for "III" ', () => {
            expect(Algorithm.romanToDecimal('III')).toEqual(3);
        });

        test('should return 4 for "IV" ', () => {
            expect(Algorithm.romanToDecimal('IV')).toEqual(4);
        });

        test('should return 5 for "V" ', () => {
            expect(Algorithm.romanToDecimal('V')).toEqual(5);
        });

        test('should return 6 for "VI" ', () => {
            expect(Algorithm.romanToDecimal('VI')).toEqual(6);
        });

        test('should return 7 for "VII" ', () => {
            expect(Algorithm.romanToDecimal('VII')).toEqual(7);
        });

        test('should return 8 for "VIII" ', () => {
            expect(Algorithm.romanToDecimal('VIII')).toEqual(8);
        });

        test('should return 9 for "IX" ', () => {
            expect(Algorithm.romanToDecimal('IX')).toEqual(9);
        });

        test('should return 10 for "X" ', () => {
            expect(Algorithm.romanToDecimal('X')).toEqual(10);
        });
    });

    describe('XI to XX', () => { // 11 to 20
        test('should return 11 for "XI" ', () => {
            expect(Algorithm.romanToDecimal('XI')).toEqual(11);
        });

        test('should return 12 for "XII" ', () => {
            expect(Algorithm.romanToDecimal('XII')).toEqual(12);
        });

        test('should return 13 for "XIII" ', () => {
            expect(Algorithm.romanToDecimal('XIII')).toEqual(13);
        });

        test('should return 14 for "XIV" ', () => {
            expect(Algorithm.romanToDecimal('XIV')).toEqual(14);
        });

        test('should return 15 for "XV" ', () => {
            expect(Algorithm.romanToDecimal('XV')).toEqual(15);
        });

        test('should return 16 for "XVI" ', () => {
            expect(Algorithm.romanToDecimal('XVI')).toEqual(16);
        });

        test('should return 17 for "XVII" ', () => {
            expect(Algorithm.romanToDecimal('XVII')).toEqual(17);
        });

        test('should return 18 for "XVIII" ', () => {
            expect(Algorithm.romanToDecimal('XVIII')).toEqual(18);
        });

        test('should return 19 for "XIX" ', () => {
            expect(Algorithm.romanToDecimal('XIX')).toEqual(19);
        });

        test('should return 20 for "XX" ', () => {
            expect(Algorithm.romanToDecimal('XX')).toEqual(20);
        });
    })

    describe('XXI to CM', () => { // 21 to 900
        test('should return 21 for "XXI" ', () => {
            expect(Algorithm.romanToDecimal('XXI')).toEqual(21);
        });

        test('should return 29 for "XXIX" ', () => {
            expect(Algorithm.romanToDecimal('XXIX')).toEqual(29);
        });
    
        test('should return 30 for "XXX" ', () => {
            expect(Algorithm.romanToDecimal('XXX')).toEqual(30);
        });
    
        test('should return 40 for "XL" ', () => {
            expect(Algorithm.romanToDecimal('XL')).toEqual(40);
        });
    
        test('should return 50 for "L" ', () => {
            expect(Algorithm.romanToDecimal('L')).toEqual(50);
        });
    
        test('should return 90 for "XC" ', () => {
            expect(Algorithm.romanToDecimal('XC')).toEqual(90);
        });
    
        test('should return 100 for "C" ', () => {
            expect(Algorithm.romanToDecimal('C')).toEqual(100);
        });
    
        test('should return 400 for "CD" ', () => {
            expect(Algorithm.romanToDecimal('CD')).toEqual(400);
        });
    
        test('should return 500 for "D" ', () => {
            expect(Algorithm.romanToDecimal('D')).toEqual(500);
        });
    
        test('should return 900 for "CM" ', () => {
            expect(Algorithm.romanToDecimal('CM')).toEqual(900);
        });
    })

    describe('Bunch of cool examples I found on the internet', () => {
        test('should return 1546 for "MDXLVI" ', () => {
            expect(Algorithm.romanToDecimal('MDXLVI')).toEqual(1546);
        });

        test('should return 999 for "CMXCIX" ', () => {
            expect(Algorithm.romanToDecimal('CMXCIX')).toEqual(999);
        });

        test('should return 3999 for "MMMCMXCIX" ', () => {
            expect(Algorithm.romanToDecimal('MMMCMXCIX')).toEqual(3999);
        });

        test('should return 1985 for "MCMLXXXV" ', () => {
            expect(Algorithm.romanToDecimal('MCMLXXXV')).toEqual(1985);
        });

        test('should return 66 for "LXVI" ', () => {
            expect(Algorithm.romanToDecimal('LXVI')).toEqual(66);
        });

        test('should return 2349 for "MMCCCXLIX" ', () => {
            expect(Algorithm.romanToDecimal('MMCCCXLIX')).toEqual(2349);
        });   
    })
});