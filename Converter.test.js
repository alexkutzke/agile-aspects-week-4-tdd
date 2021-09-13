import { Converter } from './Converter'

test('If exists class and method convert accept parameters', () => {
  const converter = new Converter();
  expect(converter.romanConverter('')).toBeNull;
});

test('If the input number is not roman should return null', () => {
  const converter = new Converter();
  expect(converter.romanConverter('5')).toBeNull;
});

test('If V returns 5', () => {
  const converter = new Converter();
  expect(converter.romanConverter('V')).toEqual(5);
});

test('If VI returns 6', () => {
  const converter = new Converter();
  expect(converter.romanConverter('VI')).toEqual(6);
});

test('If XXV returns 25', () => {
  const converter = new Converter();
  expect(converter.romanConverter('XXV')).toEqual(25);
});

test('If CCC returns 300', () => {
  const converter = new Converter();
  expect(converter.romanConverter('CCC')).toEqual(300);
});

test('If XIX returns 19', () => {
  const converter = new Converter();
  expect(converter.romanConverter('XIX')).toEqual(19);
});