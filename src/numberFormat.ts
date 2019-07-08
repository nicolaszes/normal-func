type SesymbolType = number | null | undefined

/**
 * 数字千分符号格式化
 * @param {Number} val
 */
export const thousandSesymbol = (val: SesymbolType): string => {
  if (typeof val !== 'number') {
    throw new Error('val must be number')
  }

  const numberREG: RegExp = /(?<=\b(?<!\.)\d*)\B(?=(\d{3})+(?=\b))/g
  return val.toString().replace(numberREG, ',')
}

type ReservedType = number | null | undefined

/**
 * 小数点后保留几位有效数字
 * @param {Number} val
 * @param {Number} target
 * 是否四舍五入
 * @param {Boolean} ceil
 */
export const floatReserverd = (
  val: ReservedType,
  target: number = 2,
  ceil: Boolean = false
): number => {
  if (typeof val !== 'number') {
    throw new Error('val must be number')
  }

  if (ceil) {
    return Number(val.toFixed(target))
  }

  let flag = val > 0 ? 1 : -1
  return (
    (flag * Math.floor(flag * val * Math.pow(10, target))) /
    Math.pow(10, target)
  )
}
