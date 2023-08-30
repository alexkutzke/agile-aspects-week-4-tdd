import { romanToDecimal } from "./romanToDecimal";

test('I equals 1', () => {
    expect(romanToDecimal('I')).toEqual(1);
});

test('II equals 2', () => {
    expect(romanToDecimal('II')).toEqual(2);
});

test('IV equals 4', () => {
    expect(romanToDecimal('IV')).toEqual(4);
});

test('V equals 5', () => {
    expect(romanToDecimal('V')).toEqual(5);
});

test('VII equals 7', () => {
    expect(romanToDecimal('VII')).toEqual(7);
});

test('X equals 10', () => {
    expect(romanToDecimal('X')).toEqual(10);
});

test('XVI equals 16', () => {
    expect(romanToDecimal('XVI')).toEqual(16);
});

test('XXII equals 22', () => {
    expect(romanToDecimal('XXII')).toEqual(22);
});