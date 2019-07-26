import { asyncMethod } from '../src/error'

export const asyncAction = asyncMethod(error => {
  console.log('统一异常处理', error) // 统一异常处理 b
  return error
})

const sucReq = () => Promise.resolve('a')
const failReq = () => Promise.reject('b')

class Action {
  @asyncAction async successRequest() {
    const result = await sucReq()
    console.log('successRequest', '处理返回值', result)
    return result
  }

  @asyncAction async failRequest() {
    const result = await failReq()
    console.log('failRequest', '处理返回值', result) // 永远不会执行
  }

  @asyncAction async allReuqest() {
    const result1 = await sucReq()
    console.log('allReuqest', '处理返回值 success', result1)
    const result2 = await failReq()
    console.log('allReuqest', '处理返回值 success', result2) // 永远不会执行
  }
}

const action = new Action()

// asyncMethod test
describe('asyncMethod test', () => {
  it('return success', async () => {
    expect.assertions(1)
    const result = await action.successRequest()
    expect(result).toEqual('a')
  })

  it('return fail', async () => {
    expect.assertions(0)

    try {
      await action.failRequest()
    } catch (err) {
      // 不会被执行
      console.log('err', err)
      expect(err).toBeUndefined()
    }
  })

  it('return all', async () => {
    expect.assertions(1)
    const result = await action.allReuqest()
    expect(result).toBeUndefined()
  })
})
