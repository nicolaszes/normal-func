import { flattenDeep } from '../src/array'

// flatten deep test
describe('flattenDeep test', () => {
  beforeAll(() => {
    console.log('global after all')
  })

  it('throw error', () => {
    expect(() => flattenDeep(undefined)).toThrow()
  })

  it('array test', () => {
    expect(flattenDeep([1, [2, [3]]])).toEqual([1, 2, 3])
  })

  it('number test', () => {
    expect(() => flattenDeep(1)).toThrow()
  })

  it('depth test', () => {
    expect(flattenDeep([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]])
  })
})
