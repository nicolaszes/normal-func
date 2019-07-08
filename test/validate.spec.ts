import { emailValidate } from '../src/validate'

// email validate test
describe('email validate match', () => {
  it('throw error', () => {
    expect(() => emailValidate(null || undefined)).toThrow()
  })

  it('return false', () => {
    expect(emailValidate('')).toBeFalsy()
  })

  it('return true', () => {
    expect(emailValidate('nico@apple.com')).toBeTruthy()
  })
})
