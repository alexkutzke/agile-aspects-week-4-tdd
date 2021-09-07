import ConvertRoman from './RomanToDecimal.js';

describe('Decimals conversion', () => {
    test('I must return 1', () => {
    const convertRoman = new ConvertRoman('I');
    expect(convertRoman.convert()).toEqual(1);
    });

    test('II must return 2', () => {
    const convertRoman = new ConvertRoman('II');
    expect(convertRoman.convert()).toEqual(2);
    });

    test('III must return 3', () => {
    const convertRoman = new ConvertRoman('III');
    expect(convertRoman.convert()).toEqual(3);
    });

    test('IV must return 4', () => {
    const convertRoman = new ConvertRoman('IV');
    expect(convertRoman.convert()).toEqual(4);
    });

    test('V must return 5', () => {
    const convertRoman = new ConvertRoman('V');
    expect(convertRoman.convert()).toEqual(5);
    });

    test('VI must return 6', () => {
    const convertRoman = new ConvertRoman('VI');
    expect(convertRoman.convert()).toEqual(6);
    });

    test('VII must return 7', () => {
    const convertRoman = new ConvertRoman('VII');
    expect(convertRoman.convert()).toEqual(7);
    });

    test('VIII must return 8', () => {
    const convertRoman = new ConvertRoman('VIII');
    expect(convertRoman.convert()).toEqual(8);
    });

    test('IX must return 9', () => {
    const convertRoman = new ConvertRoman('IX');
    expect(convertRoman.convert()).toEqual(9);
    });

    
    test('X must return 10', () => {
    const convertRoman = new ConvertRoman('X');
    expect(convertRoman.convert()).toEqual(10);
    });

    test('XXIIVV must return 28', () => {
    const convertRoman = new ConvertRoman('XXIIVV');
    expect(convertRoman.convert()).toEqual(28);
    });

    test('XXIVI must return 25', () => {
    const convertRoman = new ConvertRoman('XXIVI');
    expect(convertRoman.convert()).toEqual(25);
    });

    test('LC must return 50', () => {
    const convertRoman = new ConvertRoman('LC');
    expect(convertRoman.convert()).toEqual(50);
    });

    test('LVIX must return 54', () => {
    const convertRoman = new ConvertRoman('LVIX');
    expect(convertRoman.convert()).toEqual(54);
    });

    test('IL must return 54', () => {
    const convertRoman = new ConvertRoman('IL');
    expect(convertRoman.convert()).toEqual(49);
    });

    test('XC must return 90', () => {
    const convertRoman = new ConvertRoman('XC');
    expect(convertRoman.convert()).toEqual(90);
    });

    test('IC must return 90', () => {
    const convertRoman = new ConvertRoman('IC');
    expect(convertRoman.convert()).toEqual(99);
    });

    test('VC must return 90', () => {
    const convertRoman = new ConvertRoman('VC');
    expect(convertRoman.convert()).toEqual(95);
    });

    test('IIIC must return 97', () => {
    const convertRoman = new ConvertRoman('IIIC');
    expect(convertRoman.convert()).toEqual(97);
    });
})

describe('Hundreds conversion', () => {
    test('CM must return 900', () => {
    const convertRoman = new ConvertRoman('CM');
    expect(convertRoman.convert()).toEqual(900);
    });

    test('CCCXII must return 321', () => {
    const convertRoman = new ConvertRoman('CCCXII');
    expect(convertRoman.convert()).toEqual(312);
    });

    test('CCCXCIX must return 399', () => {
    const convertRoman = new ConvertRoman('CCCXCIX');
    expect(convertRoman.convert()).toEqual(399);
    });

    test('CDXXXVII must return 437', () => {
    const convertRoman = new ConvertRoman('CDXXXVII');
    expect(convertRoman.convert()).toEqual(437);
    });

    test('DCCLXXIV must return 774', () => {
    const convertRoman = new ConvertRoman('DCCLXXIV');
    expect(convertRoman.convert()).toEqual(774);
    });

    test('CCLXXIV must return 274', () => {
    const convertRoman = new ConvertRoman('CCLXXIV');
    expect(convertRoman.convert()).toEqual(274);
    });   
})

describe('Thousands conversion', () => {
    test('MDCCCIV must return 1804', () => {
    const convertRoman = new ConvertRoman('MDCCCIV');
    expect(convertRoman.convert()).toEqual(1804);
    });

    test('MMMDXLIX must return 3549', () => {
    const convertRoman = new ConvertRoman('MMMDXLIX');
    expect(convertRoman.convert()).toEqual(3549);
    });

    test('MCCLXXXIII must return 1283', () => {
    const convertRoman = new ConvertRoman('MCCLXXXIII');
    expect(convertRoman.convert()).toEqual(1283);
    });

    test('MCDLII must return 1452', () => {
    const convertRoman = new ConvertRoman('MCDLII');
    expect(convertRoman.convert()).toEqual(1452);
    });

    test('MMDCLXXVIII must return 2374', () => {
    const convertRoman = new ConvertRoman('MMCCCLXXIV');
    expect(convertRoman.convert()).toEqual(2374);
    });

    test('MMMDXLIX must return 3549', () => {
    const convertRoman = new ConvertRoman('MMMDXLIX');
    expect(convertRoman.convert()).toEqual(3549);
    });
})

