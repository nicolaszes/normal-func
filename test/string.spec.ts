import { isIncludeChineseChar, countStrLen } from '../src/string'

// isIncludeChineseChar test
describe('isIncludeChineseChar test', () => {
  it('throw error', () => {
    expect(() => isIncludeChineseChar(undefined)).toThrow()
  })

  it('chinese test', () => {
    expect(isIncludeChineseChar('汉字')).toBeTruthy()
  })

  it('number test', () => {
    expect(isIncludeChineseChar('123')).toBeFalsy()
  })
})

// countStrLen test
describe('countStrLen test', () => {
  it('throw error', () => {
    expect(() => countStrLen(undefined)).toThrow()
  })

  it('chinese test', () => {
    expect(countStrLen('汉字')).toEqual(4)
  })

  it('chinese and number test', () => {
    expect(countStrLen('汉字123abc')).toEqual(10)
  })

  it('radix test', () => {
    expect(countStrLen('汉字123', 3)).toEqual(9)
  })
})
