import { RomanToDecimal } from "./roman-to-decimal";

const romanToDecimal = new RomanToDecimal();

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
});