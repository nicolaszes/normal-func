interface CopyObj {
  [key: string]: any
}

type CopyType = CopyObj | undefined

/**
 * 深拷贝数组
 * @param obj
 * @param type 拷贝方式
 */
export const copyObj = (obj: CopyType, type: Boolean = false): CopyType => {
  // 只拷贝对象
  if (typeof obj !== 'object') return

  // 根据 obj的类型判断是新建一个数组还是对象
  const newObj: CopyObj = obj instanceof Array ? [] : {}

  // 遍历 obj，并且判断是 obj的属性才拷贝
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue
    }

    // 如果是浅拷贝，只拷贝一层
    if (!type) {
      newObj[key] = obj[key]
      continue
    }

    newObj[key] = typeof obj[key] === 'object' ? copyObj(obj[key]) : obj[key]
  }

  return newObj
}
