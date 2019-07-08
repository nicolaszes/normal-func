import { flattenDeep } from '../src/array'

// flatten deep test
describe('flattenDeep test', () => {
  // it('throw error', () => {
  //   expect(() => flattenDeep(undefined)).toThrow()
  // })

  it('array test', () => {
    expect(flattenDeep([1, [2, [3]]])).toEqual([1, 2, 3])
  })
})
