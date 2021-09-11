import { romanToDecimal } from './romanToDecimal';

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
test('Convert LXXXIV', () => {
    expect(romanToDecimal("LXXXIV")).toEqual(84);
});