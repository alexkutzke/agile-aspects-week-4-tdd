import Roman from './Roman';

describe('Testing roman to decimal values', () => {
  test('I to 1', () => {
    const roman = new Roman('I');
    expect(roman.convertToDecimal()).toEqual(1);
  });
  test('II to 2', () => {
    const roman = new Roman('II');
    expect(roman.convertToDecimal()).toEqual(2);
  });
  test('IV to 4', () => {
    const roman = new Roman('IV');
    expect(roman.convertToDecimal()).toEqual(4);
  });
  test('V to 5', () => {
    const roman = new Roman('V');
    expect(roman.convertToDecimal()).toEqual(5);
  });
  test('VI to 6', () => {
    const roman = new Roman('VI');
    expect(roman.convertToDecimal()).toEqual(6);
  });
  test('IX to 9', () => {
    const roman = new Roman('IX');
    expect(roman.convertToDecimal()).toEqual(9);
  });
  test('X to 10', () => {
    const roman = new Roman('X');
    expect(roman.convertToDecimal()).toEqual(10);
  });
  test('XXIII to 23', () => {
    const roman = new Roman('XXIII');
    expect(roman.convertToDecimal()).toEqual(23);
  });
  test('XXIV to 24', () => {
    const roman = new Roman('XXIV');
    expect(roman.convertToDecimal()).toEqual(24);
  });
  test('XXVI to 26', () => {
    const roman = new Roman('XXVI');
    expect(roman.convertToDecimal()).toEqual(26);
  });
  test('XXXVIII	 to 38', () => {
    const roman = new Roman('XXXVIII');
    expect(roman.convertToDecimal()).toEqual(38);
  });
  test('L to 50', () => {
    const roman = new Roman('L');
    expect(roman.convertToDecimal()).toEqual(50);
  });
  test('XL to 40', () => {
    const roman = new Roman('XL');
    expect(roman.convertToDecimal()).toEqual(40);
  });
  test('C to 100', () => {
    const roman = new Roman('C');
    expect(roman.convertToDecimal()).toEqual(100);
  });
  test('CD to 400', () => {
    const roman = new Roman('CD');
    expect(roman.convertToDecimal()).toEqual(400);
  });
  test('D to 500', () => {
    const roman = new Roman('D');
    expect(roman.convertToDecimal()).toEqual(500);
  });
  test('DC to 600', () => {
    const roman = new Roman('DC');
    expect(roman.convertToDecimal()).toEqual(600);
  });
  test('CM to 900', () => {
    const roman = new Roman('CM');
    expect(roman.convertToDecimal()).toEqual(900);
  });
  test('M to 1000', () => {
    const roman = new Roman('M');
    expect(roman.convertToDecimal()).toEqual(1000);
  });
})