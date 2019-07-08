import { urlParse, getUrlParams } from '../src/urlParse'

// url parse test
describe('urlParse match', () => {
  it('return object', () => {
    expect(urlParse('')).toEqual(expect.objectContaining({}))
  })

  it('return url object', () => {
    expect(urlParse('http://test.com:8080?name=1&password=2#page1')).toEqual(
      expect.objectContaining({
        hash: '#page1',
        host: 'test.com:8080',
        hostname: 'test.com',
        href: 'http://test.com:8080?name=1&password=2#page1',
        origin: 'http://test.com:8080',
        pathname: '',
        port: ':8080',
        protocol: 'http:',
        search: '?name=1&password=2'
      })
    )
  })
})

// url parse test
describe('getUrlParams match', () => {
  it('throw error', () => {
    expect(() => getUrlParams('')).toThrow()
  })

  it('return empty object', () => {
    expect(getUrlParams('http://test.com:8080')).toEqual(
      expect.objectContaining({})
    )
  })

  it('return params object', () => {
    expect(
      getUrlParams('http://test.com:8080?name=1&password=2#page1')
    ).toEqual(
      expect.objectContaining({
        name: '1',
        password: '2'
      })
    )
  })
})
