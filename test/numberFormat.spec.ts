import { thousandSesymbol } from '../src/numberFormat'

// thousand sesymbol test
describe('thousandSesymbol match number', () => {
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
