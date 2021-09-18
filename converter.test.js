import Converter from "./converter.js";

describe("converting roman numbers to decimals", () => {
  test("should return 1", () => {
    const convert = new Converter("I");
    expect(convert.run()).toEqual(1);
  });

  test("should return 2", () => {
    const convert = new Converter("II");
    expect(convert.run()).toEqual(2);
  });

  test("should return 3", () => {
    const convert = new Converter("III");
    expect(convert.run()).toEqual(3);
  });

  test("should return 4", () => {
    const convert = new Converter("IV");
    expect(convert.run()).toEqual(4);
  });

  test("should return 5", () => {
    const convert = new Converter("V");
    expect(convert.run()).toEqual(5);
  });

  test("should return 6", () => {
    const convert = new Converter("VI");
    expect(convert.run()).toEqual(6);
  });

  test("should return 7", () => {
    const convert = new Converter("VII");
    expect(convert.run()).toEqual(7);
  });
  test("should return 8", () => {
    const convert = new Converter("VIII");
    expect(convert.run()).toEqual(8);
  });

  test("should return 9", () => {
    const convert = new Converter("IX");
    expect(convert.run()).toEqual(9);
  });

  test("should return 10", () => {
    const convert = new Converter("X");
    expect(convert.run()).toEqual(10);
  });

});