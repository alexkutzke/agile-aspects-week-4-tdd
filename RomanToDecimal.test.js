import RomanToDecimal from './RomanToDecimal';

describe('Testing roman to decimal values', () => {
  test('I to 1', () => {
    expect(RomanToDecimal.convert('I')).toEqual(1);
  });
  test('II to 2', () => {
    expect(RomanToDecimal.convert('II')).toEqual(2);
  });
  test('IV to 4', () => {
    expect(RomanToDecimal.convert('IV')).toEqual(4);
  });
  test('V to 5', () => {
    expect(RomanToDecimal.convert('V')).toEqual(5);
  });
  test('VI to 6', () => {
    expect(RomanToDecimal.convert('VI')).toEqual(6);
  });
  test('IX to 9', () => {
    expect(RomanToDecimal.convert('IX')).toEqual(9);
  });
  test('X to 10', () => {
    expect(RomanToDecimal.convert('X')).toEqual(10);
  });
  test('XXIII to 23', () => {
    expect(RomanToDecimal.convert('XXIII')).toEqual(23);
  });
  test('XXIV to 24', () => {
    expect(RomanToDecimal.convert('XXIV')).toEqual(24);
  });
  test('XXVI to 26', () => {
    expect(RomanToDecimal.convert('XXVI')).toEqual(26);
  });
  test('XXXVIII	 to 38', () => {
    expect(RomanToDecimal.convert('XXXVIII')).toEqual(38);
  });
  test('L to 50', () => {
    expect(RomanToDecimal.convert('L')).toEqual(50);
  });
  test('XL to 40', () => {
    expect(RomanToDecimal.convert('XL')).toEqual(40);
  });
  test('C to 100', () => {
    expect(RomanToDecimal.convert('C')).toEqual(100);
  });
  test('CD to 400', () => {
    expect(RomanToDecimal.convert('CD')).toEqual(400);
  });
  test('D to 500', () => {
    expect(RomanToDecimal.convert('D')).toEqual(500);
  });
  test('DC to 600', () => {
    expect(RomanToDecimal.convert('DC')).toEqual(600);
  });
  test('CM to 900', () => {
    expect(RomanToDecimal.convert('CM')).toEqual(900);
  });
  test('M to 1000', () => {
    expect(RomanToDecimal.convert('M')).toEqual(1000);
  });
})