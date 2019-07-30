import {
  emailValidate,
  IdCardValidate,
  macAddressValidate,
  longitudeValidate,
  latitudeValidate
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

  it('wrong last code return false', () => {
    expect(IdCardValidate('12012319960229234x')).toBeFalsy()
  })

  it('number outrange input return true', () => {
    expect(IdCardValidate(String(110123199601025796))).toBeFalsy()
  })

  it('string input return true', () => {
    expect(IdCardValidate('110123199601025796')).toBeTruthy()
  })
})

// mac address test
describe('mac address validate match', () => {
  it('throw error', () => {
    expect(() => macAddressValidate(null || undefined)).toThrow()
  })

  it('empty str return false', () => {
    expect(macAddressValidate('')).toBeFalsy()
  })

  it('not enough length return false', () => {
    expect(macAddressValidate('58:E8:76:83')).toBeFalsy()
  })

  it('return true', () => {
    expect(macAddressValidate('58:E8:76:83:A2:C7')).toBeTruthy()
  })
})

// longitude test
describe('longitude validate match', () => {
  it('throw error', () => {
    expect(() => longitudeValidate(null || undefined)).toThrow()
  })

  it('empty str return false', () => {
    expect(longitudeValidate('')).toBeFalsy()
  })

  it('wrong char length return false', () => {
    expect(longitudeValidate('?180')).toBeFalsy()
  })

  it('outrange integer number length return false', () => {
    expect(longitudeValidate(181)).toBeFalsy()
  })

  it('outrange float number length return false', () => {
    expect(longitudeValidate(180.3131)).toBeFalsy()
  })

  it('return true', () => {
    expect(longitudeValidate(120.8675)).toBeTruthy()
  })

  it('return true', () => {
    expect(longitudeValidate('120.8675')).toBeTruthy()
  })
})

// latitude test
describe('latitude validate match', () => {
  it('throw error', () => {
    expect(() => latitudeValidate(null || undefined)).toThrow()
  })

  it('empty str return false', () => {
    expect(latitudeValidate('')).toBeFalsy()
  })

  it('wrong char length return false', () => {
    expect(latitudeValidate('?90')).toBeFalsy()
  })

  it('outrange integer number length return false', () => {
    expect(latitudeValidate(91)).toBeFalsy()
  })

  it('outrange float number length return false', () => {
    expect(latitudeValidate(90.1)).toBeFalsy()
  })

  it('return true', () => {
    expect(latitudeValidate(12.8675)).toBeTruthy()
  })

  it('return true', () => {
    expect(latitudeValidate('12.8675')).toBeTruthy()
  })
})
