import { RomanToDecimal } from "./roman-to-decimal";

let romanToDecimal = null;

beforeEach(() => romanToDecimal = new RomanToDecimal());

describe('design RomanToDecimal class', () => {
    test('exists class', () => {
        expect(romanToDecimal).not.toBeNull();
    });
    test('exists method convert', () => {
        expect(romanToDecimal.convert('I')).not.toBeNull();
    });
});
describe('convert roman to decimal', () => {
    test('returns 0', () => {
        expect(romanToDecimal.convert(null)).toBe(0);
    });
    test('returns exception for invalid type param', () => {
        expect(() => romanToDecimal.convert(1)).toThrow('Invalid Param Type');
    });
    test('returns exception for invalid params', () => {
        expect(() => romanToDecimal.convert('invalid')).toThrow('Invalid Roman Value');
    });
    test('returns 1 for I value', () => {
        expect(romanToDecimal.convert('I')).toBe(1);
    });
    test('returns 5 for V value', () => {
        expect(romanToDecimal.convert('V')).toBe(5);
    });
    test('returns 10 for X value', () => {
        expect(romanToDecimal.convert('X')).toBe(10);
    });
    test('returns 50 for L value', () => {
        expect(romanToDecimal.convert('L')).toBe(50);
    });
    test('returns 100 for C value', () => {
        expect(romanToDecimal.convert('C')).toBe(100);
    });
    test('returns 500 for D value', () => {
        expect(romanToDecimal.convert('D')).toBe(500);
    });
    test('returns 1000 for M value', () => {
        expect(romanToDecimal.convert('M')).toBe(1000);
    });
    test('returns exception for lower case value', () => {
        expect(() => romanToDecimal.convert('v')).toThrow('Invalid Roman Value');
    });
    test('returns 2 for II value', () => {
        expect(romanToDecimal.convert('II')).toBe(2);
    });
    test('returns 4 for IV value', () => {
        expect(romanToDecimal.convert('IV')).toBe(4);
    });
    test("returns 6 for VI value", () => {
        expect(romanToDecimal.convert("VI")).toBe(6);
    });
    test("returns exception for repeated value more than allowed", () => {
        expect(() => romanToDecimal.convert("IIII")).toThrow("Invalid Roman Value");
        expect(() => romanToDecimal.convert("VV")).toThrow("Invalid Roman Value");
    });
    test("returns exception for subtraction value not allowed", () => {
      expect(() => romanToDecimal.convert("VL")).toThrow("Invalid Roman Value");
    });
});