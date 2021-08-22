const romanToDecimal = require('./roman-to-decimal');

test('Convert I', () => {
    expect(romanToDecimal("I")).toEqual(1);
});

test('Convert II', () => {
    expect(romanToDecimal("II")).toEqual(2);
});

test('Convert III', () => {
    expect(romanToDecimal("III")).toEqual(3);
});

test('Convert IV', () => {
    expect(romanToDecimal("IV")).toEqual(4);
});

test('Convert V', () => {
    expect(romanToDecimal("V")).toEqual(5);
});

test('Convert VI', () => {
    expect(romanToDecimal("VI")).toEqual(6);
});

test('Convert VIII', () => {
    expect(romanToDecimal("VIII")).toEqual(8);
});

test('Convert IX', () => {
    expect(romanToDecimal("IX")).toEqual(9);
});

test('Convert X', () => {
    expect(romanToDecimal("X")).toEqual(10);
});

test('Convert XI', () => {
    expect(romanToDecimal("XI")).toEqual(11);
});
test('Convert XIII', () => {
    expect(romanToDecimal("XIII")).toEqual(13);
});
test('Convert XIV', () => {
    expect(romanToDecimal("XIV")).toEqual(14);
});
test('Convert XV', () => {
    expect(romanToDecimal("XV")).toEqual(15);
});
test('Convert XV', () => {
    expect(romanToDecimal("XV")).toEqual(15);
});
test('Convert XVI', () => {
    expect(romanToDecimal("XVI")).toEqual(16);
});
test('Convert XVII', () => {
    expect(romanToDecimal("XVII")).toEqual(17);
});
test('Convert XIX', () => {
    expect(romanToDecimal("XIX")).toEqual(19);
});
test('Convert XX', () => {
    expect(romanToDecimal("XX")).toEqual(20);
});
test('Convert XXI', () => {
    expect(romanToDecimal("XXI")).toEqual(21);
});
test('Convert XXII', () => {
    expect(romanToDecimal("XXII")).toEqual(22);
});
test('Convert XXIV', () => {
    expect(romanToDecimal("XXIV")).toEqual(24);
});
test('Convert XXV', () => {
    expect(romanToDecimal("XXV")).toEqual(25);
});
test('Convert XXVI', () => {
    expect(romanToDecimal("XXVI")).toEqual(26);
});
test('Convert XL', () => {
    expect(romanToDecimal("XL")).toEqual(40);
});
test('Convert L', () => {
    expect(romanToDecimal("L")).toEqual(50);
});
test('Convert LX', () => {
    expect(romanToDecimal("LX")).toEqual(60);
});
test('Convert LXIX', () => {
    expect(romanToDecimal("LXIX")).toEqual(69);
});
test('Convert LXXXIII', () => {
    expect(romanToDecimal("LXXXIII")).toEqual(83);
});
test('Convert LXXXIV', () => {
    expect(romanToDecimal("LXXXIV")).toEqual(84);
});
test('Convert LXXXIX', () => {
    expect(romanToDecimal("LXXXIX")).toEqual(89);
});
test('Convert XC', () => {
    expect(romanToDecimal("XC")).toEqual(90);
});
test('Convert C', () => {
    expect(romanToDecimal("C")).toEqual(100);
});
test('Convert CL', () => {
    expect(romanToDecimal("CL")).toEqual(150);
});
test('Convert CCC', () => {
    expect(romanToDecimal("CCC")).toEqual(300);
});
test('Convert CCCXL', () => {
    expect(romanToDecimal("CCCXL")).toEqual(340);
});
test('Convert CCCXCIV', () => {
    expect(romanToDecimal("CCCXCIV")).toEqual(394);
});
test('Convert CD', () => {
    expect(romanToDecimal("CD")).toEqual(400);
});
test('Convert D', () => {
    expect(romanToDecimal("D")).toEqual(500);
});
test('Convert DC', () => {
    expect(romanToDecimal("DC")).toEqual(600);
});
test('Convert DCCXLVIII', () => {
    expect(romanToDecimal("DCCXLVIII")).toEqual(748);
});
test('Convert DCCCLXXXVIII', () => {
    expect(romanToDecimal("DCCCLXXXVIII")).toEqual(888);
});
test('Convert DCCCXCIX', () => {
    expect(romanToDecimal("DCCCXCIX")).toEqual(899);
});
test('Convert CM', () => {
    expect(romanToDecimal("CM")).toEqual(900);
});
test('Convert M', () => {
    expect(romanToDecimal("M")).toEqual(1000);
});
test('Convert MD', () => {
    expect(romanToDecimal("MD")).toEqual(1500);
});
test('Convert MCMXCIX', () => {
    expect(romanToDecimal("MCMXCIX")).toEqual(1999);
});
test('Convert MMXXI', () => {
    expect(romanToDecimal("MMXXI")).toEqual(2021);
});
test('Convert MMMCDXLIV', () => {
    expect(romanToDecimal("MMMCDXLIV")).toEqual(3444);
});
test('Convert MMMDCCLXXVIII', () => {
    expect(romanToDecimal("MMMDCCLXXVIII")).toEqual(3778);
});