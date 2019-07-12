import { timeLoop } from '../src/timer'

// timeLoop test
describe('timeLoop test', () => {
  it('throw error', () => {
    expect(() => timeLoop(undefined)).toThrow()
  })

  it('count 10s test', () => {
    expect(timeLoop(10)).toBeUndefined()
  })

  it('number test', () => {
    expect(timeLoop(30)).toBeUndefined()
  })
})
