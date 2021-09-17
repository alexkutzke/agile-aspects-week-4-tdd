import { Converter } from './Converter'

test('If exists class and method convert accept parameters', () => {
  const converter = new Converter();
  expect(converter.romanConverter('')).toBeNull;
});

test('If the input number is not roman should return null', () => {
  const converter = new Converter();
  expect(converter.romanConverter('5')).toBeNull;
});

test('If I returns 1', () => {
  const converter = new Converter();
  expect(converter.romanConverter('I')).toEqual(1);
});

test('If II returns 2', () => {
  const converter = new Converter();
  expect(converter.romanConverter('II')).toEqual(2);
});

test('If III returns 3', () => {
  const converter = new Converter();
  expect(converter.romanConverter('III')).toEqual(3);
});

test('If IV returns 4', () => {
  const converter = new Converter();
  expect(converter.romanConverter('IV')).toEqual(4);
});

test('If V returns 5', () => {
  const converter = new Converter();
  expect(converter.romanConverter('V')).toEqual(5);
});

test('If VI returns 6', () => {
  const converter = new Converter();
  expect(converter.romanConverter('VI')).toEqual(6);
});

test('If VII returns 7', () => {
  const converter = new Converter();
  expect(converter.romanConverter('VII')).toEqual(7);
});

test('If VIII returns 8', () => {
  const converter = new Converter();
  expect(converter.romanConverter('VIII')).toEqual(8);
});

test('If IX returns 9', () => {
  const converter = new Converter();
  expect(converter.romanConverter('IX')).toEqual(9);
});

test('If X returns 10', () => {
  const converter = new Converter();
  expect(converter.romanConverter('X')).toEqual(10);
});

test('If L returns 50', () => {
  const converter = new Converter();
  expect(converter.romanConverter('L')).toEqual(50);
});

test('If XC returns 90', () => {
  const converter = new Converter();
  expect(converter.romanConverter('XC')).toEqual(90);
});

test('If CI returns 101', () => {
  const converter = new Converter();
  expect(converter.romanConverter('CI')).toEqual(101);
});

test('If MCMXCIX returns 1999', () => {
  const converter = new Converter();
  expect(converter.romanConverter('MCMXCIX')).toEqual(1999);
});