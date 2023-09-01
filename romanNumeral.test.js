import RomanNumeral from "./romanNumeral.js";


describe ('Roman Numeral', () => { 
describe ('Units', () => {
});
test ('should creat a roman numeral object from a string',() => {
    const romanNumeral = new RomanNumeral ('I');
    expect (romanNumeral.toInt()).toEqual(1);
});

test ('should convert "II" to 2',() => {
    const romanNumeral = new RomanNumeral ('II');
    expect (romanNumeral.toInt()).toEqual(2);
});

test ('should convert "III" to 3',() => {
    const romanNumeral = new RomanNumeral ('III');
    expect (romanNumeral.toInt()).toEqual(3);
});

test ('should convert "IV" to 4',() => {
    const romanNumeral = new RomanNumeral ('IV');
    expect (romanNumeral.toInt()).toEqual(4);
});

test ('should convert "V" to 5',() => {
    const romanNumeral = new RomanNumeral ('V');
    expect (romanNumeral.toInt()).toEqual(5);
});

test ('should convert "VI" to 6',() => {
    const romanNumeral = new RomanNumeral ('VI');
    expect (romanNumeral.toInt()).toEqual(6);
});

test ('should convert "VII" to 7',() => {
    const romanNumeral = new RomanNumeral ('VII');
    expect (romanNumeral.toInt()).toEqual(7);
});

test ('should convert "VII" to 8',() => {
    const romanNumeral = new RomanNumeral ('VIII');
    expect (romanNumeral.toInt()).toEqual(8);
});


test ('should convert "IX" to 9',() => {
    const romanNumeral = new RomanNumeral ('IX');
    expect (romanNumeral.toInt()).toEqual(9);
});

test ('should convert "X" to 10',() => {
    const romanNumeral = new RomanNumeral ('X');
    expect (romanNumeral.toInt()).toEqual(10);
    });
});
describe ('Decimals', () => { 
    test ('should convert "XI" to 11',() => {
        const romanNumeral = new RomanNumeral ('XI');
        expect (romanNumeral.toInt()).toEqual(11);
    });
    test ('should convert "XII" to 12',() => {
        const romanNumeral = new RomanNumeral ('XII');
        expect (romanNumeral.toInt()).toEqual(12);
    });
    test ('should convert "XIII" to 13',() => {
        const romanNumeral = new RomanNumeral ('XIII');
        expect (romanNumeral.toInt()).toEqual(13);
    });

    test ('should convert "XIV" to 14',() => {
        const romanNumeral = new RomanNumeral ('XIV');
        expect (romanNumeral.toInt()).toEqual(14);
        });
   test ('should convert "XV" to 15',() => {
        const romanNumeral = new RomanNumeral ('XV');
        expect (romanNumeral.toInt()).toEqual(15);
        });
    test ('should convert "XVI" to 16',() => {
        const romanNumeral = new RomanNumeral ('XVI');
        expect (romanNumeral.toInt()).toEqual(16);
        });
    test ('should convert "XVII" to 17',() => {
        const romanNumeral = new RomanNumeral ('XVII');
        expect (romanNumeral.toInt()).toEqual(17);
            });
     test ('should convert "XVIII" to 18',() => {
        const romanNumeral = new RomanNumeral ('XVIII');
        expect (romanNumeral.toInt()).toEqual(18);
              });
    test ('should convert "XIX" to 19',() => {
        const romanNumeral = new RomanNumeral ('XIX');
        expect (romanNumeral.toInt()).toEqual(19);
            });
    test ('should convert "XX" to 20',() => {
        const romanNumeral = new RomanNumeral ('XX');
        expect (romanNumeral.toInt()).toEqual(20);
            });
    test ('should convert "XXI" to 21',() => {
        const romanNumeral = new RomanNumeral ('XXI');
        expect (romanNumeral.toInt()).toEqual(21);
            });
    test ('should convert "XXII" to 22',() => {
        const romanNumeral = new RomanNumeral ('XXII');
        expect (romanNumeral.toInt()).toEqual(22);
            }); 
    test ('should convert "XXIII" to 23',() => {
        const romanNumeral = new RomanNumeral ('XXIII');
        expect (romanNumeral.toInt()).toEqual(23);
            });
     test ('should convert "XXXIX" to 39',() => {
        const romanNumeral = new RomanNumeral ('XXXIX');
        expect (romanNumeral.toInt()).toEqual(39);
            });
    test ('should convert "XL" to 40',() => {
        const romanNumeral = new RomanNumeral ('XL');
        expect (romanNumeral.toInt()).toEqual(40);
            });
     test ('should convert "XLI" to 41',() => {
        const romanNumeral = new RomanNumeral ('XLI');
        expect (romanNumeral.toInt()).toEqual(41);
            });
    test ('should convert "XLIV" to 44' ,() => {
        const romanNumeral = new RomanNumeral ('XLIV');
        expect (romanNumeral.toInt()).toEqual(44);
            });
    test ('should convert "XLIX" to 49',() => {
        const romanNumeral = new RomanNumeral ('XLIX');
        expect (romanNumeral.toInt()).toEqual(49);
            });     
     test ('should convert "L" to 50',() => {
        const romanNumeral = new RomanNumeral ('L');
        expect (romanNumeral.toInt()).toEqual(50);
            });     
     test ('should convert "XC" to 90',() => {
        const romanNumeral = new RomanNumeral ('XC');
        expect (romanNumeral.toInt()).toEqual(90);
        });     
    });
    describe ('Hundreds', () => {
     test ('should convert "C" to 100',() => {
            const romanNumeral = new RomanNumeral ('C');
            expect (romanNumeral.toInt()).toEqual(100);
            });
    test ('should convert "CI" to 101',() => {
        const romanNumeral = new RomanNumeral ('CI');
        expect (romanNumeral.toInt()).toEqual(101);
        });
    test ('should convert "CCCXLIX" to 349',() => {
        const romanNumeral = new RomanNumeral ('CCCXLIX');
        expect (romanNumeral.toInt()).toEqual(349);
        });    

    test ('should throw exeception if to find 4 consecutively equal digits',() => {
        expect (() => {
            new RomanNumeral('IIII')
            }).toThrow();
        });
   test ('should throw exeception with "XXXIIIIV" digits',() => {
        expect (() => {
            new RomanNumeral('XXXIIIIV')
            }).toThrow();
        });
        });     
