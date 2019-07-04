import { urlParse } from '../src/index'

// thousand sesymbol test
describe('urlParse match number', () => {
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
