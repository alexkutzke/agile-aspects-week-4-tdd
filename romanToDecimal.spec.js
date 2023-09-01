import { romanToDecimal } from "./romanToDecimal";

describe('Roman To Decimal Conversion', () => {

    describe('Basic entry values', () => {
        test('I equals 1', () => {
            expect(romanToDecimal('I')).toEqual(1);
        });

        test('V equals 5', () => {
            expect(romanToDecimal('V')).toEqual(5);
        });

        test('X equals 10', () => {
            expect(romanToDecimal('X')).toEqual(10);
        });

        test('L equals 50', () => {
            expect(romanToDecimal('L')).toEqual(50);
        });

        test('C equals 100', () => {
            expect(romanToDecimal('C')).toEqual(100);
        });

        test('D equals 500', () => {
            expect(romanToDecimal('D')).toEqual(500);
        });

        test('M equals 1000', () => {
            expect(romanToDecimal('M')).toEqual(1000);
        });
    })

    describe('More complex entry values', () => {
        test('IV equals 4', () => {
            expect(romanToDecimal('IV')).toEqual(4);
        });

        test('IX equals 9', () => {
            expect(romanToDecimal('IX')).toEqual(9);
        });

        test('XL equals 40', () => {
            expect(romanToDecimal('XL')).toEqual(40);
        });

        test('XC equals 90', () => {
            expect(romanToDecimal('XC')).toEqual(90);
        });

        test('CD equals 400', () => {
            expect(romanToDecimal('CD')).toEqual(400);
        });

        test('CM equals 900', () => {
            expect(romanToDecimal('CM')).toEqual(900);
        });

        test('II equals 2', () => {
            expect(romanToDecimal('II')).toEqual(2);
        });

        test('III equals 3', () => {
            expect(romanToDecimal('III')).toEqual(3);
        });

        test('VII equals 7', () => {
            expect(romanToDecimal('VII')).toEqual(7);
        });

        test('XII equals 12', () => {
            expect(romanToDecimal('XII')).toEqual(12);
        });

        test('XVI equals 16', () => {
            expect(romanToDecimal('XVI')).toEqual(16);
        });

        test('XX equals 20', () => {
            expect(romanToDecimal('XX')).toEqual(20);
        });

        test('XXII equals 22', () => {
            expect(romanToDecimal('XXII')).toEqual(22);
        });

        test('LII equals 52', () => {
            expect(romanToDecimal('LII')).toEqual(52);
        });

        test('CXX equals 120', () => {
            expect(romanToDecimal('CXX')).toEqual(120);
        });

        test('CC equals 200', () => {
            expect(romanToDecimal('CC')).toEqual(200);
        });

        test('CCC equals 300', () => {
            expect(romanToDecimal('CCC')).toEqual(300);
        });

        test('DL equals 550', () => {
            expect(romanToDecimal('DL')).toEqual(550);
        });

        test('DCCC equals 800', () => {
            expect(romanToDecimal('DCCC')).toEqual(800);
        });

        test('MMM equals 3000', () => {
            expect(romanToDecimal('MMM')).toEqual(3000);
        });

        test('MCMXCIV equals 1994', () => {
            expect(romanToDecimal('MCMXCIV')).toEqual(1994);
        });

        test('MMXXI equals 2021', () => {
            expect(romanToDecimal('MMXXI')).toEqual(2021);
        });

        test('MMCDXLVII equals 2447', () => {
            expect(romanToDecimal('MMCDXLVII')).toEqual(2447);
        });

        test('MMCMXCIX equals 2999', () => {
            expect(romanToDecimal('MMCMXCIX')).toEqual(2999);
        });
    })

    describe('Invalid entry values', () => {
        test('Missing entry value', () => {
            expect(() => {
                romanToDecimal('');
            }).toThrow('Invalid entry roman numeral!');
        });

        test('Not a roman entry value', () => {
            expect(() => {
                romanToDecimal('EAS');
            }).toThrow('Invalid entry roman numeral!');
        });
    })
})