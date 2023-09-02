import RomanNumeral from "./roman_numeral.js";

describe('Roman Numeral', () => {
    describe('Units', () => {
        test('Should creat a roman numeral objetc from a string', () => {
            const romanNumeral = new RomanNumeral('I');
            expect(romanNumeral.toInt()).toEqual(1);
        });
        
        test('Should convert "II" to 2', () => {
            const romanNumeral = new RomanNumeral('II');
            expect(romanNumeral.toInt()).toEqual(2);
        });
        
        test('Should convert "III" to 3', () => {
            const romanNumeral = new RomanNumeral('III');
            expect(romanNumeral.toInt()).toEqual(3);
        });
        
        test('Should convert "IV" to 4', () => {
            const romanNumeral = new RomanNumeral('IV');
            expect(romanNumeral.toInt()).toEqual(4);
        });
        
        test('Should convert "V" to 5', () => {
            const romanNumeral = new RomanNumeral('V');
            expect(romanNumeral.toInt()).toEqual(5);
        });
        
        test('Should convert "VI" to 6', () => {
            const romanNumeral = new RomanNumeral('VI');
            expect(romanNumeral.toInt()).toEqual(6);
        });
        
        test('Should convert "VII" to 7', () => {
            const romanNumeral = new RomanNumeral('VII');
            expect(romanNumeral.toInt()).toEqual(7);
        });
        
        test('Should convert "VIII" to 8', () => {
            const romanNumeral = new RomanNumeral('VIII');
            expect(romanNumeral.toInt()).toEqual(8);
        });
        
        test('Should convert "IX" to 9', () => {
            const romanNumeral = new RomanNumeral('IX');
            expect(romanNumeral.toInt()).toEqual(9);
        });
        
        test('Should convert "X" to 10', () => {
            const romanNumeral = new RomanNumeral('X');
            expect(romanNumeral.toInt()).toEqual(10);
        });
    });

    describe('Decimals', () => {
        test('Should convert "XI" to 11', () => {
            const romanNumeral = new RomanNumeral('XI');
            expect(romanNumeral.toInt()).toEqual(11);
        });
    
        test('Should convert "XII" to 12', () => {
            const romanNumeral = new RomanNumeral('XII');
            expect(romanNumeral.toInt()).toEqual(12);
        });
    
        test('Should convert "XIII" to 13', () => {
            const romanNumeral = new RomanNumeral('XIII');
            expect(romanNumeral.toInt()).toEqual(13);
        });
    
        test('Should convert "XIV" to 14', () => {
            const romanNumeral = new RomanNumeral('XIV');
            expect(romanNumeral.toInt()).toEqual(14);
        });
    
        test('Should convert "XV" to 15', () => {
            const romanNumeral = new RomanNumeral('XV');
            expect(romanNumeral.toInt()).toEqual(15);
        });
    
        test('Should convert "XVI" to 16', () => {
            const romanNumeral = new RomanNumeral('XVI');
            expect(romanNumeral.toInt()).toEqual(16);
        });
    
        test('Should convert "XVII" to 17', () => {
            const romanNumeral = new RomanNumeral('XVII');
            expect(romanNumeral.toInt()).toEqual(17);
        });
    
        test('Should convert "XVIII" to 18', () => {
            const romanNumeral = new RomanNumeral('XVIII');
            expect(romanNumeral.toInt()).toEqual(18);
        });
    
        test('Should convert "XIX" to 19', () => {
            const romanNumeral = new RomanNumeral('XIX');
            expect(romanNumeral.toInt()).toEqual(19);
        });
    
        test('Should convert "XX" to 20', () => {
            const romanNumeral = new RomanNumeral('XX');
            expect(romanNumeral.toInt()).toEqual(20);
        });
    
        test('Should convert "XXXIX" to 39', () => {
            const romanNumeral = new RomanNumeral('XXXIX');
            expect(romanNumeral.toInt()).toEqual(39);
        });

        test('Should convert "XL" to 40', () => {
            const romanNumeral = new RomanNumeral('XL');
            expect(romanNumeral.toInt()).toEqual(40);
        });

        test('Should convert "XLI" to 41', () => {
            const romanNumeral = new RomanNumeral('XLI');
            expect(romanNumeral.toInt()).toEqual(41);
        });

        test('Should convert "XLIV" to 44', () => {
            const romanNumeral = new RomanNumeral('XLIV');
            expect(romanNumeral.toInt()).toEqual(44);
        });

        test('Should convert "XLIX" to 49', () => {
            const romanNumeral = new RomanNumeral('XLIX');
            expect(romanNumeral.toInt()).toEqual(49);
        });

        test('Should convert "L" to 50', () => {
            const romanNumeral = new RomanNumeral('L');
            expect(romanNumeral.toInt()).toEqual(50);
        });

        test('Should convert "LI" to 51', () => {
            const romanNumeral = new RomanNumeral('LI');
            expect(romanNumeral.toInt()).toEqual(51);
        });

        test('Should convert "XC" to 90', () => {
            const romanNumeral = new RomanNumeral('XC');
            expect(romanNumeral.toInt()).toEqual(90);
        });
    });

    describe('Hundreds', () => {
        test('Should convert "C" to 100', () => {
            const romanNumeral = new RomanNumeral('C');
            expect(romanNumeral.toInt()).toEqual(100);
        });

        test('Should convert "CI" to 101', () => {
            const romanNumeral = new RomanNumeral('CI');
            expect(romanNumeral.toInt()).toEqual(101);
        });

        test('Should convert "CCCXLIX" to 349', () => {
            const romanNumeral = new RomanNumeral('CCCXLIX');
            expect(romanNumeral.toInt()).toEqual(349);
        });

        test('Should throw exeception if it finds 4 consecutively equal digits', () => {
            expect(() => {
                new RomanNumeral('IIII')
            }).toThrow();
        });

        test('Should throw exeception with "XXXIIIIV" digits', () => {
            expect(() => {
                new RomanNumeral('XXXIIIIV')
            }).toThrow();
        });

        test('Should convert "D" to 500', () => {
            const romanNumeral = new RomanNumeral('D');
            expect(romanNumeral.toInt()).toEqual(500);
        });

        test('Should convert "DIX" to 509', () => {
            const romanNumeral = new RomanNumeral('DIX');
            expect(romanNumeral.toInt()).toEqual(509);
        });

        test('Should convert "DC" to 600', () => {
            const romanNumeral = new RomanNumeral('DC');
            expect(romanNumeral.toInt()).toEqual(600);
        });
        
        test('Should convert "DIX" to 509', () => {
            const romanNumeral = new RomanNumeral('DIX');
            expect(romanNumeral.toInt()).toEqual(509);
        });

        test('Should convert "DCCL" to 750', () => {
            const romanNumeral = new RomanNumeral('DCCL');
            expect(romanNumeral.toInt()).toEqual(750);
        });

        test('Should convert "" to 509', () => {
            const romanNumeral = new RomanNumeral('DIX');
            expect(romanNumeral.toInt()).toEqual(509);
        });
    });

    describe('Thousand', () => {
        test('Should convert "CM" to 900', () => {
            const romanNumeral = new RomanNumeral('CM');
            expect(romanNumeral.toInt()).toEqual(900);
        });

        test('Should convert "CMXC" to 990', () => {
            const romanNumeral = new RomanNumeral('CMXC');
            expect(romanNumeral.toInt()).toEqual(990);
        });

        test('Should convert "CMXCIX" to 999', () => {
            const romanNumeral = new RomanNumeral('CMXCIX');
            expect(romanNumeral.toInt()).toEqual(999);
        });

        test('Should convert "M" to 1000', () => {
            const romanNumeral = new RomanNumeral('M');
            expect(romanNumeral.toInt()).toEqual(1000);
        });
    });
});


