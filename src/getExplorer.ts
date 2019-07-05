type UserAgentType = string | undefined | null
type ExplorerType = string
type ExpType = string
type IsExplorer = boolean
/**
 * @returns {String} current browser name
 */
export const getExplorer = (userAgent: UserAgentType): ExplorerType => {
  const isExplorer = (exp: ExpType): IsExplorer =>
    userAgent ? userAgent.indexOf(exp) > -1 : false

  if (isExplorer('MSIE')) {
    return 'IE'
  }
  if (isExplorer('Firefox')) {
    return 'Firefox'
  }
  if (isExplorer('Chrome')) {
    return 'Chrome'
  }
  if (isExplorer('Opera')) {
    return 'Opera'
  }
  if (isExplorer('Safari')) {
    return 'Safari'
  }
  return ''
}
