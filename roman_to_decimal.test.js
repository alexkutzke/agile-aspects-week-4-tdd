import { RomanToDecimal } from './roman_to_decimal';

// Apenas algarismo romano com um caractere

test('if creates the number 1 from string I', () => {
    const romanToDecimal = new RomanToDecimal('I');
    expect(romanToDecimal.toDecimal()).toEqual(1);
});

test('if creates the number 5 from string V', () => {
    const romanToDecimal = new RomanToDecimal('V');
    expect(romanToDecimal.toDecimal()).toEqual(5);
});

test('if creates the number 10 from string X', () => {
    const romanToDecimal = new RomanToDecimal('X');
    expect(romanToDecimal.toDecimal()).toEqual(10);
});

test('if creates the number 50 from string L', () => {
    const romanToDecimal = new RomanToDecimal('L');
    expect(romanToDecimal.toDecimal()).toEqual(50);
});

test('if creates the number 100 from string C', () => {
    const romanToDecimal = new RomanToDecimal('C');
    expect(romanToDecimal.toDecimal()).toEqual(100);
});

test('if creates the number 500 from string D', () => {
    const romanToDecimal = new RomanToDecimal('D');
    expect(romanToDecimal.toDecimal()).toEqual(500);
});

test('if creates the number 1000 from string M', () => {
    const romanToDecimal = new RomanToDecimal('M');
    expect(romanToDecimal.toDecimal()).toEqual(1000);
});


// Algarismo romanos com dois caracteres (sem subtração)
// Primeira necessidade de refatorar, reduzi os ifs em dois vetores pra comparar com base no índice

test('if creates the number 2 from string II', () => {
    const romanToDecimal = new RomanToDecimal('II');
    expect(romanToDecimal.toDecimal()).toEqual(2);
});

test('if creates the number 20 from string XX', () => {
    const romanToDecimal = new RomanToDecimal('XX');
    expect(romanToDecimal.toDecimal()).toEqual(20);
});

// Vários caracteres, mas sem subtração

test('if creates the number 1668 from string MDCLXVIII', () => {
    const romanToDecimal = new RomanToDecimal('MDCLXVIII');
    expect(romanToDecimal.toDecimal()).toEqual(1668);
});

// explodido em várias funções para passar os testes, função toDecimal ficando cada vez mais complexa

// Testes com subtração

test('if creates the number 4 from string IV', () => {
    const romanToDecimal = new RomanToDecimal('IV');
    expect(romanToDecimal.toDecimal()).toEqual(4);
});

test('if creates the number 14 from string XIV', () => {
    const romanToDecimal = new RomanToDecimal('XIV');
    expect(romanToDecimal.toDecimal()).toEqual(14);
});

test('if creates the number 99 from string XCIX', () => {
    const romanToDecimal = new RomanToDecimal('XCIX');
    expect(romanToDecimal.toDecimal()).toEqual(99);
});

test('if creates the number 1664 from string MDCLXIV', () => {
    const romanToDecimal = new RomanToDecimal('MDCLXIV');
    expect(romanToDecimal.toDecimal()).toEqual(1664);
});

// Maior string possível antes de usar barra no número romano

test('if creates the number 3999 from string MMMCMXCIX', () => {
    const romanToDecimal = new RomanToDecimal('MMMCMXCIX');
    expect(romanToDecimal.toDecimal()).toEqual(3999);
});