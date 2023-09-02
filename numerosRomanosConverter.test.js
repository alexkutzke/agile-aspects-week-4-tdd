import NumerosRomanosConverter from "./numerosRomanosConverter";

test("Should convert the roman number I to number 1", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('I');
   expect(numero).toEqual(1);
})

test("Should convert the roman number II to number 2", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('II');
   expect(numero).toEqual(2);
})

test("Should convert the roman number III to number 3", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('III');
   expect(numero).toEqual(3);
})

test("Should convert the roman number IV to number 4", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('IV');
   expect(numero).toEqual(4);
})

test("Should convert the roman number V to number 5", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('V');
   expect(numero).toEqual(5);
})

test("Should convert the roman number X to number 10", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('X');
   expect(numero).toEqual(10);
})

test("Should convert the roman number XXXIII to number 33", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('XXXIII');
   expect(numero).toEqual(33);
})

test("Should convert the roman number L to number 50", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('L');
   expect(numero).toEqual(50);
})

test("Should convert the roman number CM to number 900", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('CM');
   expect(numero).toEqual(900);
})

test("Should convert the roman number CMXCIX to number 999", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('CMXCIX');
   expect(numero).toEqual(999);
})

test("Should convert the roman number MMMMMCD to number 5400", () => {
   let numero = NumerosRomanosConverter.romanoParaNumero('MMMMMCD');
   expect(numero).toEqual(5400);
})