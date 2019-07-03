import NormalFuncClass from '../src/index'

/**
 * Dummy test
 */
describe("NormalFunc test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("NormalFunc is instantiable", () => {
    expect(new NormalFuncClass(4)).toBeInstanceOf(NormalFuncClass)
  })
})