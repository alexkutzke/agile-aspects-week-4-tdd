import Converter from "./converter.js";

describe("Número romano para decimal", () => {
  test("Deve retornar 1", () => {
    const convert = new Converter("I");
    expect(convert.run()).toEqual(1);
  });

  test(" Deve retornar 2", () => {
    const convert = new Converter("II");
    expect(convert.run()).toEqual(2);
  });

  test("Deve retornar 3", () => {
    const convert = new Converter("III");
    expect(convert.run()).toEqual(3);
  });

  test("Deve retornar 4", () => {
    const convert = new Converter("IV");
    expect(convert.run()).toEqual(4);
  });

  test("Deve retornar 5", () => {
    const convert = new Converter("V");
    expect(convert.run()).toEqual(5);
  });

  test("Deve retornar 6", () => {
    const convert = new Converter("VI");
    expect(convert.run()).toEqual(6);
  });

  test("Deve retornar 7", () => {
    const convert = new Converter("VII");
    expect(convert.run()).toEqual(7);
  });
  test("Deve retornar 8", () => {
    const convert = new Converter("VIII");
    expect(convert.run()).toEqual(8);
  });

  test("Deve retornar 9", () => {
    const convert = new Converter("IX");
    expect(convert.run()).toEqual(9);
  });

  test("Deve retornar 10", () => {
    const convert = new Converter("X");
    expect(convert.run()).toEqual(10);
  });

  xtest("Deve retornar 15", () => {
    const convert = new Converter("XV");
    expect(convert.run()).toEqual(15);
  });

  xtest("Deve retornar 20", () => {
    const convert = new Converter("XX");
    expect(convert.run()).toEqual(20);
  });

  xtest("Deve retornar 50", () => {
    const convert = new Converter("L");
    expect(convert.run()).toEqual(50);
  });

  test("Deve retornar 100", () => {
    const convert = new Converter("C");
    expect(convert.run()).toEqual(100);
  });
}); 