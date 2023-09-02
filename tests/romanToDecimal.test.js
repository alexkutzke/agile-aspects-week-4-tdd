const RomanToDecimal = require('../RomanToDecimal')

test("Should instantiate a converter class object", () => {
    const romanToDecimal = new RomanToDecimal();
    expect(romanToDecimal).toBeInstanceOf(RomanToDecimal);
})

test("Should convert the roman number I to decimal 1,0", () => {
    const romanToDecimal = new RomanToDecimal("I");
    expect(romanToDecimal.convert()).
        toEqual(1.0);
})

test("Should convert the roman number II to decimal 2,0", () => {
    const romanToDecimal = new RomanToDecimal("II");
    expect(romanToDecimal.convert()).
        toEqual(2.0);
})

test("Should convert the roman number III to decimal 3,0", () => {
    const romanToDecimal = new RomanToDecimal("III");
    expect(romanToDecimal.convert()).
        toEqual(3.0);
})

test("Should convert the roman number IV to decimal 4,0", () => {
    const romanToDecimal = new RomanToDecimal("IV");
    expect(romanToDecimal.convert()).
        toEqual(4.0);
})

test("Should convert the roman number V to decimal 5,0", () => {
    const romanToDecimal = new RomanToDecimal("V");
    expect(romanToDecimal.convert()).
        toEqual(5.0);
})

test("Should convert the roman number VI to decimal 6,0", () => {
    const romanToDecimal = new RomanToDecimal("VI");
    expect(romanToDecimal.convert()).
        toEqual(6.0);
})

test("Should convert the roman number VII to decimal 7,0", () => {
    const romanToDecimal = new RomanToDecimal("VII");
    expect(romanToDecimal.convert()).
        toEqual(7.0);
})

test("Should convert the roman number VIII to decimal 8,0", () => {
    const romanToDecimal = new RomanToDecimal("VIII");
    expect(romanToDecimal.convert()).
        toEqual(8.0);
})

test("Should convert the roman number IX to decimal 9,0", () => {
    const romanToDecimal = new RomanToDecimal("IX");
    expect(romanToDecimal.convert()).
        toEqual(9.0);
})

test("Should convert the roman number X to decimal 10,0", () => {
    const romanToDecimal = new RomanToDecimal("X");
    expect(romanToDecimal.convert()).
        toEqual(10.0);
})

test("Should convert the roman number XI to decimal 11,0", () => {
    const romanToDecimal = new RomanToDecimal("XI");
    expect(romanToDecimal.convert()).
        toEqual(11.0);
})

test("Should convert the roman number XII to decimal 12,0", () => {
    const romanToDecimal = new RomanToDecimal("XII");
    expect(romanToDecimal.convert()).
        toEqual(12.0);
})

test("Should convert the roman number XIII to decimal 13,0", () => {
    const romanToDecimal = new RomanToDecimal("XIII");
    expect(romanToDecimal.convert()).
        toEqual(13.0);
})

test("Should convert the roman number XIV to decimal 14,0", () => {
    const romanToDecimal = new RomanToDecimal("XIV");
    expect(romanToDecimal.convert()).
        toEqual(14.0);
})

test("Should convert the roman number XV to decimal 15,0", () => {
    const romanToDecimal = new RomanToDecimal("XV");
    expect(romanToDecimal.convert()).
        toEqual(15.0);
})

test("Should convert the roman number XVI to decimal 16,0", () => {
    const romanToDecimal = new RomanToDecimal("XVI");
    expect(romanToDecimal.convert()).
        toEqual(16.0);
})

test("Should convert the roman number XVII to decimal 17,0", () => {
    const romanToDecimal = new RomanToDecimal("XVII");
    expect(romanToDecimal.convert()).
        toEqual(17.0);
})

test("Should convert the roman number XVIII to decimal 18,0", () => {
    const romanToDecimal = new RomanToDecimal("XVIII");
    expect(romanToDecimal.convert()).
        toEqual(18.0);
})

test("Should convert the roman number XIX to decimal 19,0", () => {
    const romanToDecimal = new RomanToDecimal("XIX");
    expect(romanToDecimal.convert()).
        toEqual(19.0);
})

test("Should convert the roman number XX to decimal 20,0", () => {
    const romanToDecimal = new RomanToDecimal("XX");
    expect(romanToDecimal.convert()).
        toEqual(20.0);
})