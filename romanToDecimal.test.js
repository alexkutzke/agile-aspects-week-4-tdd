import romanToDecimal from './romanToDecimal';

describe("RomanToDecimal", () => {
    it('should convert "" to 0', () => {
      expect(romanToDecimal("")).toBe(0);
    })
    it('should convert "I" to 1', () => {
      expect(romanToDecimal("I")).toBe(1);
    })
    it('should convert "III" to 3', () => {
      expect(romanToDecimal("III")).toBe(3);
    })
    it('should convert "IV" to 4', () => {
      expect(romanToDecimal("IV")).toBe(4);
    })
    it('should convert "VI" to 6', () => {
      expect(romanToDecimal("VI")).toBe(6);
    })
    it('should convert "VII" to 7', () => {
      expect(romanToDecimal("VII")).toBe(7);
    })
    it('should convert "VII" to 7', () => {
      expect(romanToDecimal("VII")).toBe(7);
    })
    it('should convert "XXXIV" to 34', () => {
      expect(romanToDecimal("XXXIV")).toBe(34);
    })
    it('should convert "CCCLXXXV" to 385', () => {
      expect(romanToDecimal("CCCLXXXV")).toBe(385);
    })
    it('should convert "DCCXCIV" to 794', () => {
      expect(romanToDecimal("DCCXCIV")).toBe(794);
    })
    it('should convert "M" to 1000', () => {
      expect(romanToDecimal("M")).toBe(1000);
    })
    it('convert lowercase roman', () => {
      expect(romanToDecimal("ii")).toBe(2);
    })
    it('convert mixed cased roman', () => {
      expect(romanToDecimal("ViI")).toBe(7);
    })
    it('invalid char should return NaN', () => {
      expect(romanToDecimal("NOT_ROMAN")).toBeNaN();
    })
    test('Converts with whitespace', () => {
      expect(romanToDecimal('  X  ')).toBe(10);
    });
})