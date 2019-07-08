import { thousandSesymbol, floatReserverd } from '../src/numberFormat'

// thousand sesymbol test
describe('thousandSesymbol match number', () => {
  it('throw error', () => {
    expect(() => thousandSesymbol(undefined || null)).toThrow()
  })

  it('number less than 1', () => {
    expect(thousandSesymbol(0.123456)).toBe('0.123456')
  })

  it('number morn than 1', () => {
    expect(thousandSesymbol(1.23456)).toBe('1.23456')
  })

  it('number morn than 1000', () => {
    expect(thousandSesymbol(123456.789)).toBe('123,456.789')
  })

  it('minus number', () => {
    expect(thousandSesymbol(-123456.78901)).toBe('-123,456.78901')
  })
})

// thousand sesymbol test
describe('floatReserverd match number', () => {
  it('throw error', () => {
    expect(() => floatReserverd(undefined || null)).toThrow()
  })

  it('number less than 1', () => {
    expect(floatReserverd(0.123456)).toBe(0.12)
  })

  it('number morn than 1', () => {
    expect(floatReserverd(1.23456)).toBe(1.23)
  })

  it('number morn than 1000', () => {
    expect(floatReserverd(123456.789)).toBe(123456.78)
  })

  it('minus number', () => {
    expect(floatReserverd(-123456.78901)).toBe(-123456.78)
  })

  it('add target', () => {
    expect(floatReserverd(0.123456, 3)).toBe(0.123)
  })

  it('add ceil', () => {
    expect(floatReserverd(0.123456, 3, true)).toBe(0.123)
  })
})
