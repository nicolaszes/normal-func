import { copyObj } from '../src/object'

describe('copy obj test', () => {
  it('test undefined', () => {
    expect(copyObj(undefined)).toBeUndefined()
  })

  it('test copy array', () => {
    expect(copyObj([1, { a: { b: 2 } }])).toEqual([1, { a: { b: 2 } }])
  })

  it('test obj hasOwnProperty', () => {
    const obj = Object.create({ a: 1 })
    expect(copyObj(Object.assign(obj))).toEqual(expect.objectContaining({}))
  })

  it('test shadow copy', () => {
    expect(
      copyObj({
        a: 1,
        b: {
          c: 3
        },
        d: 4
      })
    ).toEqual(
      expect.objectContaining({
        a: 1,
        d: 4
      })
    )
  })

  it('test deep copy', () => {
    expect(
      copyObj(
        {
          a: 1,
          b: {
            c: [2, 3]
          }
        },
        true
      )
    ).toEqual({
      a: 1,
      b: {
        c: [2, 3]
      }
    })
  })
})
