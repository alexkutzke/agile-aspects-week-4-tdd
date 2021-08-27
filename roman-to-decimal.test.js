import { RomanToDecimal } from './roman-to-decimal';

test('Class initialization testing', () => {
  expect(new RomanToDecimal()).toBeInstanceOf(RomanToDecimal);
});

test('Testing conversion from "I" to "1"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('I')).toEqual(1);
});

test('Testing conversion from "II" to "2"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('II')).toEqual(2);
});

test('Testing conversion from "IV" to "4"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('IV')).toEqual(4);
});

test('Testing conversion from "VII" to "7"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('VII')).toEqual(7);
});

test('Testing conversion from "IX" to "9"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('IX')).toEqual(9);
});

test('Testing conversion from "XIV" to "14"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('XIV')).toEqual(14);
});

test('Testing conversion from "XXVIII" to "28"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('XXVIII')).toEqual(28);
});

test('Testing conversion from "LXXXIII" to "83"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('LXXXIII')).toEqual(83);
});

test('Testing conversion from "CCLXXIX" to "279"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('CCLXXIX')).toEqual(279);
});

test('Testing conversion from "DLV" to "555"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('DLV')).toEqual(555);
});

test('Testing conversion from "MMMCMXCIX" to "3999"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('MMMCMXCIX')).toEqual(3999);
});

test('Testing conversion from "mmmcmxcix" (lowercase) to "3999"', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(romanToDecimal.convert('mmmcmxcix')).toEqual(3999);
});

test('Testing invalid string that results in an exception', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(() => romanToDecimal.convert(2021)).toThrow('The parameter entered is not a valid string.');
});

test('Testing an invalid letter (outside of Roman numerals) results in an exception', () => {
  const romanToDecimal = new RomanToDecimal();

  expect(() => romanToDecimal.convert('MMMCMXCIR')).toThrow('One or more letters entered do not make up the roman numbers.');
});
