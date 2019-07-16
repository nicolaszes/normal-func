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

type ArrType = Array<number> | undefined | null

/**
 * 求两个数组的最长公共子序列
 * @param {Array} arr1
 * @param {Array} arr2
 */
export const intersect = (arr1: ArrType, arr2: ArrType): Array<number> => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('must be arr')
  }

  const map: any = {}
  const res: Array<number> = []

  for (let n of arr1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }

  for (let n of arr2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
