import RomanConverter from "./RomanConverter";

describe("RomanConverter", () => {
  const converter = new RomanConverter();

  it("converts Roman numerals to decimals", () => {
    expect(converter.convert("I")).toBe(1);
    expect(converter.convert("IV")).toBe(4);
    expect(converter.convert("IX")).toBe(9);
    expect(converter.convert("LVIII")).toBe(58);
    expect(converter.convert("MCMXCIV")).toBe(1994);
  });

  it("handles lowercase input", () => {
    expect(converter.convert("iv")).toBe(4);
  });

  it("handles invalid input", () => {
    expect(() => converter.convert("INVALID")).toThrowError(
      "Invalid Roman numeral"
    );
  });
});
