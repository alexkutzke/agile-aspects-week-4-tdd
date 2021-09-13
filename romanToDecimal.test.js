import romanToDecimal from './romanToDecimal'

test('XIV = 14', () => {
    expect(romanToDecimal('XIV')).toEqual(14);
});

test('XXXIX = 39', () => {
    expect(romanToDecimal('XXXIX')).toEqual(39);
});

test('XXIIVVX = 30', () => {
    expect(romanToDecimal('XXIIVVX')).toEqual(30); 
});

test('MDCCCIV = 1804', () => {
    expect(romanToDecimal('MDCCCIV')).toEqual(1804);
});

test('XXIVI = 25', () => {
    expect(romanToDecimal('XXIVI')).toEqual(25); 
});

test('XXX = 30', () => {
    expect(romanToDecimal('XXX')).toEqual(30);
});

test('XXXVVI = 41', () => {
    expect(romanToDecimal('XXXVVI')).toEqual(41);
});

test('roman number = null', () => {
    expect(romanToDecimal()).toEqual(null);
});

test('XCV = 95', () => {
    expect(romanToDecimal('XCV')).toEqual(95);
});

test('MMIX = 2009', () => {
    expect(romanToDecimal('MMIX')).toEqual(2009);
});

test('CD = 400', () => {
    expect(romanToDecimal('CD')).toEqual(400);
});

test('LXXVI = 76', () => {
    expect(romanToDecimal('LXXVI')).toEqual(76);
});

test('CCCXIV = 314', () => {
    expect(romanToDecimal('LXXICCXLV')).toEqual(314);
});


test('CXXXIII = 133', () => {
    expect(romanToDecimal('CXXXIII')).toEqual(133);
});


test('DCCXI = 711', () => {
    expect(romanToDecimal('LVDCLXVI')).toEqual(711);
});

test('CCLV = 255', () => {
    expect(romanToDecimal('CCLV')).toEqual(255);
});

test('MMXI = 2011', () => {
    expect(romanToDecimal('MMXI')).toEqual(2011);
});

test('CMXVI = 911', () => {
    expect(romanToDecimal('CMXVI')).toEqual(916);
});

test('MMCMLXXXVII = 2987', () => {
    expect(romanToDecimal('MMCMLXXXVII')).toEqual(2987);
});

test('MMMCMXCIX = 3999', () => {
    expect(romanToDecimal('MMMCMXCIX')).toEqual(3999);
});
