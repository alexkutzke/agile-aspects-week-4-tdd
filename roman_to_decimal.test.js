import toInt from "./roman_to_decimal"

describe("Testes de numero romano para decimal", () => {
  test("if I is equal 1", () => {    
    expect(toInt("I")).toEqual(1)
  })
  test("if II is equal 2", () => {
    expect(toInt("II")).toEqual(2)
  })
  test("if III is equal 3", () => {
    expect(toInt("III")).toEqual(3)
  })
  test("if IV is equal 4", () => {
    expect(toInt("IV")).toEqual(4)
  })
  test("if V is equal 5", () => {
    expect(toInt("V")).toEqual(5)
  })
  test("if VI is equal 6", () => {
    expect(toInt("VI")).toEqual(6)
  })
  test("if VII is equal 7", () => {
    expect(toInt("VII")).toEqual(7)
  })
  test("if VIII is equal 8", () => {
    expect(toInt("VIII")).toEqual(8)
  })
  test("if IX is equal 9", () => {
    expect(toInt("IX")).toEqual(9)
  })
  test("if X is equal 10", () => {
    expect(toInt("X")).toEqual(10)
  })
  test("if XI is equal 11", () => {
    expect(toInt("XI")).toEqual(11)
  })
  test("if XI is equal 12", () => {
    expect(toInt("XII")).toEqual(12)
  })
  test("if XI is equal 13", () => {
    expect(toInt("XIII")).toEqual(13)
  })
  test("if XI is equal 14", () => {
    expect(toInt("XIV")).toEqual(14)
  })
  test("if XI is equal 15", () => {
    expect(toInt("XV")).toEqual(15)
  })
  test("if XI is equal 16", () => {
    expect(toInt("XVI")).toEqual(16)
  })
  test("if XI is equal 17", () => {
    expect(toInt("XVII")).toEqual(17)
  })
  test("if XI is equal 18", () => {
    expect(toInt("XVIII")).toEqual(18)
  })
  test("if XI is equal 19", () => {
    expect(toInt("XIX")).toEqual(19)
  })
  test("if XI is equal 20", () => {
    expect(toInt("XX")).toEqual(20)
  })
  test("if XXXIX is equal 39", () => {
    expect(toInt("XXXIX")).toEqual(39)
  })
  test("if XL is equal 40", () => {
    expect(toInt("XL")).toEqual(40)
  })
  test("if CXCIX is equal 199", () => {
    expect(toInt("CXCIX")).toEqual(199)
  })
  test("if XLI is equal 41", () => {
    expect(toInt("XLI")).toEqual(41)
  })
  test("if XLIV is equal 44", () => {
    expect(toInt("XLIV")).toEqual(44)
  })
  test("if XLIX is equal 49", () => {
    expect(toInt("XLIX")).toEqual(49)
  })
  test("if L is equal 49", () => {
    expect(toInt("L")).toEqual(50)
  })
  test("if MCMXCIX is equal 1999", () => {
    expect(toInt("MCMXCIX")).toEqual(1999)
  })
  test("if XC is equal 90", () => {
    expect(toInt("XC")).toEqual(90)
  })
  test("if CI is equal 101", () => {
    expect(toInt("CI")).toEqual(101)
  })
  test("if CCCXLIX is equal 349", () => {
    expect(toInt("CCCXLIX")).toEqual(349)
  })
})