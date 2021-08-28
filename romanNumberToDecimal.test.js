import { RomanNumberToDecimal } from "./romanNumberToDecimal";

test('Check letter that is not a part of a roman number', () => {
    expect(() => new RomanNumberToDecimal().convertRomanNumberToDecimal('R'))
        .toThrow('The character informed is not a roman number!');
});

test('Check letter that is not a part of a roman number with more than one character', () => {
    expect(() => new RomanNumberToDecimal().convertRomanNumberToDecimal('XIVP'))
        .toThrow('The character informed is not a roman number!');
});

test('Check character that is not a part of a roman number', () => {
    expect(() => new RomanNumberToDecimal().convertRomanNumberToDecimal('.'))
        .toThrow('The character informed is not a roman number!');
});

test('Convert I to 1', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('I')).toEqual(1);
});

test('Convert II to 2', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('II')).toEqual(2);
});


test('Convert III to 3', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('III')).toEqual(3);
});

test('Convert IV to 4', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('IV')).toEqual(4);
});

test('Convert V to 5', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('V')).toEqual(5);
});

test('Convert VI to 6', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('VI')).toEqual(6);
});

test('Convert VII to 7', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('VII')).toEqual(7);
});

test('Convert VIII to 8', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('VIII')).toEqual(8);
});

test('Convert IX to 9', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('IX')).toEqual(9);
});

test('Convert X to 10', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('X')).toEqual(10);
});

test('Convert XI to 11', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XI')).toEqual(11);
});

test('Convert XIV to 14', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XIV')).toEqual(14);
});

test('Convert XV to 15', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XV')).toEqual(15);
});

test('Convert XVI to 16', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XVI')).toEqual(16);
});

test('Convert XIX to 19', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XIX')).toEqual(19);
});

test('Convert XX to 20', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XX')).toEqual(20);
});

test('Convert XXIII to 23', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XXIII')).toEqual(23);
});

test('Convert XXIV to 24', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XXIV')).toEqual(24);
});

test('Convert XXXIX to 39', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XXXIX')).toEqual(39);
});

test('Convert XL to 40', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XL')).toEqual(40);
});

test('Convert XLII to 42', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XLII')).toEqual(42);
});

test('Convert XLIV to 44', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XLIV')).toEqual(44);
});

test('Convert XLV to 45', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XLV')).toEqual(45);
});

test('Convert XLIX to 49', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XLIX')).toEqual(49);
});

test('Convert L to 50', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('L')).toEqual(50);
});

test('Convert LVII to 57', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('LVII')).toEqual(57);
});

test('Convert LXIV to 64', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('LXIV')).toEqual(64);
});

test('Convert LXXIX to 79', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('LXXIX')).toEqual(79);
});

test('Convert LXXXVII to 87', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('LXXXVII')).toEqual(87);
});

test('Convert XC to 90', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XC')).toEqual(90);
});

test('Convert XCII to 92', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XCII')).toEqual(92);
});

test('Convert XCV to 95', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XCV')).toEqual(95);
});

test('Convert XCIX to 99', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('XCIX')).toEqual(99);
});

test('Convert C to 100', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('C')).toEqual(100);
});

test('Convert CXLIV to 144', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CXLIV')).toEqual(144);
});

test('Convert CXLVI to 146', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CXLVI')).toEqual(146);
});

test('Convert CCXLVII to 247', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CCXLVII')).toEqual(247);
});

test('Convert CCC to 300', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CCC')).toEqual(300);
});

test('Convert CCCLI to 351', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CCCLI')).toEqual(351);
});

test('Convert CD to 400', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CD')).toEqual(400);
});

test('Convert CDXLIV to 444', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CDXLIV')).toEqual(444);
});

test('Convert CDLXXX to 480', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CDLXXX')).toEqual(480);
});

test('Convert D to 500', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('D')).toEqual(500);
});

test('Convert DLXXIX to 579', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DLXXIX')).toEqual(579);
});

test('Convert DC to 600', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DC')).toEqual(600);
});

test('Convert DCLXXIII to 673', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DCLXXIII')).toEqual(673);
});

test('Convert DCCXCIV to 794', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DCCXCIV')).toEqual(794);
});

test('Convert DCCCLXXVII to 877', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DCCCLXXVII')).toEqual(877);
});

test('Convert DCCCXCVI to 896', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('DCCCXCVI')).toEqual(896);
});

test('Convert CM to 900', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CM')).toEqual(900);
});

test('Convert CMXCIX to 999', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('CMXCIX')).toEqual(999);
});

test('Convert CM to M', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('M')).toEqual(1000);
});

test('Convert MDXCVIII to 1598', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MDXCVIII')).toEqual(1598);
});

test('Convert MDCCCLXXXIX to 1889', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MDCCCLXXXIX')).toEqual(1889);
});

test('Convert MCMXCII to 1992', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MCMXCII')).toEqual(1992);
});

test('Convert MCMXCVI to 1996', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MCMXCVI')).toEqual(1996);
});

test('Convert CM to 2000', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MM')).toEqual(2000);
});

test('Convert MMMCMLXXXVI to 3986', () => {
    expect(new RomanNumberToDecimal().convertRomanNumberToDecimal('MMMCMLXXXVI')).toEqual(3986);
});
