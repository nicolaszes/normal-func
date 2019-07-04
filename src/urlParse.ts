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

export const urlParse = (url: string): PartialUrlParse | {} => {
  const result: INameToValueMap = {}
  const keys = [
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
  const regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/
  const match = regexp.exec(url)

  if (!match) {
    return result
  }

  for (let i = keys.length - 1; i >= 0; --i) {
    result[keys[i]] = match[i] ? match[i] : ''
  }

  return result
}
