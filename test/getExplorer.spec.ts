import { getExplorer } from '../src/getExplorer'

// get explorer test
describe('urlParse match number', () => {
  it('return string', () => {
    expect(getExplorer(undefined)).toEqual('')
  })

  it('return IE', () => {
    expect(getExplorer('MSIE')).toEqual('IE')
  })

  it('return Firefox', () => {
    expect(getExplorer('Firefox')).toEqual('Firefox')
  })

  it('return Chrome', () => {
    expect(getExplorer('Chrome')).toEqual('Chrome')
  })

  it('return Opera', () => {
    expect(getExplorer('Opera')).toEqual('Opera')
  })

  it('return Safari', () => {
    expect(getExplorer('Safari')).toEqual('Safari')
  })
})
