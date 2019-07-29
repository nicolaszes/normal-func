import {
  emailValidate,
  IdCardValidate,
  MacAddressValidate
} from '../src/validate'

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

// IdCardValidate test
describe('IdCardValidate match', () => {
  it('throw error', () => {
    expect(() => IdCardValidate(null || undefined)).toThrow()
  })

  it('empty string return false', () => {
    expect(() => IdCardValidate('')).toThrow()
  })

  it('not include area return false', () => {
    expect(IdCardValidate('190123199402209802')).toBeFalsy()
  })

  it('wrong date return false', () => {
    expect(IdCardValidate('120123199402299802')).toBeFalsy()
  })

  it('correct date return true', () => {
    expect(IdCardValidate('110123199601025796')).toBeTruthy()
  })

  it('wrong number after date return false', () => {
    expect(IdCardValidate('12012319960229aaa2')).toBeFalsy()
  })

  it('wrong last code return false', () => {
    expect(IdCardValidate('120123199602292322')).toBeFalsy()
  })

  it('return true', () => {
    expect(IdCardValidate('110123199601025796')).toBeTruthy()
  })
})

// mac address test
describe('mac address validate match', () => {
  it('throw error', () => {
    expect(() => MacAddressValidate(null || undefined)).toThrow()
  })

  it('empty str return false', () => {
    expect(MacAddressValidate('')).toBeFalsy()
  })

  it('not enough length return false', () => {
    expect(MacAddressValidate('58:E8:76:83')).toBeFalsy()
  })

  it('return true', () => {
    expect(MacAddressValidate('58:E8:76:83:A2:C7')).toBeTruthy()
  })
})
