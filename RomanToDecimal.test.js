import { romanToDecimal } from './RomanToDecimal';

describe('romanToDecimal', () => {
    test('XXIIVV equals to 28', () => {
        expect(romanToDecimal('XXIIVV')).toEqual(28);
    })

    test('MDCCCIV equals to 1804', () => {
        expect(romanToDecimal('MDCCCIV')).toBe(1804)
    })

    test('XXIVI equals to 25', () => {
        expect(romanToDecimal('XXIVI')).toBe(25)
    })

    test('XXIVI equals to 25', () => {
        expect(romanToDecimal('XXIVI')).toBe(25)
    })

    test('DCCLXXVII equals to 777', () => {
        expect(romanToDecimal('DCCLXXVII')).toBe(777)
    })

    test('XCVIII equals to 98', () => {
        expect(romanToDecimal('XCVIII')).toBe(98)
    })
})