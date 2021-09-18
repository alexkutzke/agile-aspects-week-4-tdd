import { convertRomanToDecimal } from "./exercise";

describe("Unit tests exercise", () => {
  describe("convertRomanToDecimal()", () => {
    it("Shoud return 1 when passed I", () => {
      const result = convertRomanToDecimal("I");
      expect(result).toEqual(1);
    });
    it("Shoud return 5 when passed V", () => {
      const result = convertRomanToDecimal("V");
      expect(result).toEqual(5);
    });
    it("Shoud return 10 when passed X", () => {
      const result = convertRomanToDecimal("X");
      expect(result).toEqual(10);
    });
    it("Shoud return 50 when passed L", () => {
      const result = convertRomanToDecimal("L");
      expect(result).toEqual(50);
    });
    it("Shoud return 100 when passed C", () => {
      const result = convertRomanToDecimal("C");
      expect(result).toEqual(100);
    });
    it("Shoud return 500 when passed D", () => {
      const result = convertRomanToDecimal("D");
      expect(result).toEqual(500);
    });
    it("Shoud return 1000 when passed M", () => {
      const result = convertRomanToDecimal("M");
      expect(result).toEqual(1000);
    });
    it("Shoud return 25 when passed XXV", () => {
      const result = convertRomanToDecimal("XXV");
      expect(result).toEqual(25);
    });
    it("Shoud return 105 when passed CV", () => {
      const result = convertRomanToDecimal("CV");
      expect(result).toEqual(105);
    });
    it("Shoud return 350 when passed M", () => {
      const result = convertRomanToDecimal("CCCL");
      expect(result).toEqual(350);
    });
  });
});
