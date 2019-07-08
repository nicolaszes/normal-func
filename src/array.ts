interface DeepArray<T> extends Array<T | DeepArray<T>> {}
type FlattenDeepArr = DeepArray<number> | undefined | any

/**
 * 数组降维
 * @param arr 数组
 */
export const flattenDeep = (arr: FlattenDeepArr): Array<number> => {
  // if (!Array.isArray(arr)) {
  //   throw new Error('must be arr')
  // }

  // if (typeof Array.prototype.flat !== 'function') {
  //   return arr.flat(Infinity)
  // }

  return Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr]
}
