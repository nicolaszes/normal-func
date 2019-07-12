type SecondType = number | undefined | null

/**
 * JS 是单线程的，所以 setTimeout 的误差其实是无法被完全解决的，原因有很多：
 * 可能是回调中的，有可能是浏览器中的各种事件导致。
 * 这也是为什么页面开久了，定时器会不准的原因，当然我们可以通过一定的办法去减少这个误差。
 */
export const timeLoop = (second: SecondType): void => {
  if (typeof second !== 'number') {
    throw new Error('second must be number')
  }

  // const second: number = 60 * 1000 * 60 * 2
  const startTime: number = new Date().getTime()
  const end: number = new Date().getTime() + second
  const interval: number = 1000
  let count = 0
  let currentInterval: number = interval

  function loop() {
    count++
    const offset = new Date().getTime() - (startTime + count * interval) // 代码执行所消耗的时间
    const diff = end - new Date().getTime()

    if (diff <= 0) {
      return
    }
    // 得到下一次循环所消耗的时间
    currentInterval = interval - offset

    setTimeout(loop, currentInterval)
  }

  setTimeout(loop, currentInterval)
}
