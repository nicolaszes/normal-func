interface UrlParse {
  href: string
  origin: string
  protocol: string
  host: string
  hostname: string
  port: string
  pathname: string
  search: string
  hash: string
}

interface INameToValueMap {
  [key: string]: string
}

type PartialUrlParse = Partial<UrlParse>

/**
 * @description 解析 url
 * @param {String} url
 */
export const urlParse = (url: string): PartialUrlParse | {} => {
  const result: INameToValueMap = {}
  const keys: Array<string> = [
    'href',
    'origin',
    'protocol',
    'host',
    'hostname',
    'port',
    'pathname',
    'search',
    'hash'
  ]
  const regexp: RegExp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/
  const match: Array<string> | null = regexp.exec(url)

  if (!match) {
    return result
  }

  for (let i: number = keys.length - 1; i >= 0; --i) {
    result[keys[i]] = match[i] ? match[i] : ''
  }

  return result
}

interface ParamsResult {
  [key: string]: string
}

type GetUrlParamsType = Object

/**
 * @description 从URL中解析参数
 * @param {String} url
 */
export const getUrlParams = (url: string): GetUrlParamsType => {
  const result: ParamsResult = {}

  const urlRegexp: RegExp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))/
  if (!urlRegexp.test(url)) {
    throw new Error('url is invalide')
  }

  const paramsRegexp: RegExp = /\?([^#]*)?/
  const match: Array<string> | null = paramsRegexp.exec(url)

  if (!match) {
    return result
  }

  const [, queryStr] = match

  const queryArray: Array<string> = queryStr.split('&')
  for (let i: number = 0; i < queryArray.length; i++) {
    result[queryArray[i].split('=')[0]] = queryArray[i].split('=')[1]
  }

  return result
}
