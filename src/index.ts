export { urlParse } from './urlParse'

export const thousandSesymbol = (val: number): string => {
  const numberREG = /(?<=\b(?<!\.)\d*)\B(?=(\d{3})+(?=\b))/g
  return val.toString().replace(numberREG, ',')
}

export default class NormalFuncClass {
  private length: number
  constructor(length: number) {
    this.length = length
  }
}
