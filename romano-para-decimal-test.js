import { RomanToDecimal } from "./RomanToDecimal";

describe("RomanToDecimal", () => {
  it('deve converter "III" para 3', () => {
    const converter = new RomanToDecimal("III");
    expect(converter.toDecimal()).toBe(3);
  });

  it('deve converter "IV" para 4', () => {
    const converter = new RomanToDecimal("IV");
    expect(converter.toDecimal()).toBe(4);
  });

  it('deve converter "IX" para 9', () => {
    const converter = new RomanToDecimal("IX");
    expect(converter.toDecimal()).toBe(9);
  });

  it('deve converter "LVIII" para 58', () => {
    const converter = new RomanToDecimal("LVIII");
    expect(converter.toDecimal()).toBe(58);
  });

  it('deve converter "MCMXCIV" para 1994', () => {
    const converter = new RomanToDecimal("MCMXCIV");
    expect(converter.toDecimal()).toBe(1994);
  });

  it("deve converter uma string vazia para 0", () => {
    const converter = new RomanToDecimal("");
    expect(converter.toDecimal()).toBe(0);
  });

  it("deve converter uma string com caracteres inválidos para 0", () => {
    const converter = new RomanToDecimal("XYZ");
    expect(converter.toDecimal()).toBe(0);
  });
});
