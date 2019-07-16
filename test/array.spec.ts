import { flattenDeep, intersect } from '../src/array'

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

// intersect test
describe('intersect test', () => {
  it('throw error', () => {
    expect(() => intersect(undefined, undefined)).toThrow()
  })

  it('throw error', () => {
    expect(() => intersect([1], undefined)).toThrow()
  })

  it('throw error', () => {
    expect(() => intersect(undefined, [1])).toThrow()
  })

  // it('same element array test', () => {
  //   expect(intersect([1, 1], [1])).toEqual([1])
  // })

  it('different element array test', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
  })
})
