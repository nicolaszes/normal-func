type IsIncludeChineseCharType = string | undefined | null

/**
 * 判断传入字符串是否是汉字
 * @param {String} str
 * @returns {Boolean}
 */
export const isIncludeChineseChar = (
  str: IsIncludeChineseCharType
): Boolean => {
  if (typeof str !== 'string') {
    throw new Error('must be string')
  }

  const reg: RegExp = new RegExp('[\\u4E00-\\u9FFF]+', 'g')

  return reg.test(str)
}

type CountChineseStrLenType = string | undefined | null

/**
 * 计算当前字符串入库长度
 * @param {String} str
 * @param {Number} radix
 * @returns {Number}
 */
export const countStrLen = (
  str: CountChineseStrLenType,
  radix: number = 2
): number => {
  if (typeof str !== 'string') {
    throw new Error('must be string')
  }

  let count: number = 0
  for (let i: number = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      count += radix
      continue
    }
    count++
  }
  return count
}
