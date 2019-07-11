interface DeepArray<T> extends Array<T | DeepArray<T>> {}
type FlattenDeepArr = DeepArray<any> | undefined | any

/**
 * 数组降维
 * @param {Array} arr 数组
 * @param {Number} depth 降维深度
 */
export const flattenDeep = (
  arr: FlattenDeepArr,
  depth: number = Infinity
): Array<any> => {
  if (!Array.isArray(arr)) {
    throw new Error('must be arr')
  }

  // if (typeof Array.prototype.flat !== 'function') {
  //   return Array.isArray(arr)
  //     ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
  //     : [arr]
  // }

  return arr.flat(depth)
}
