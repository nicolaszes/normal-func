/**
 * 方法级别的异常处理
 * 装饰器需要放在函数上
 * @param errorHandler 统一异常处理
 */
export const asyncMethod = (errorHandler?: (error?: Error) => void) => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const func = descriptor.value
  return {
    get() {
      return (...args: any[]) => {
        return Promise.resolve(func.apply(this, args)).catch(error => {
          errorHandler && errorHandler(error)
        })
      }
    },
    set(newValue: any) {
      return newValue
    }
  }
}
