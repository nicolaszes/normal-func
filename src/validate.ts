type EmailType = string | undefined | null

/**
 * 校验是否满足邮箱格式
 * @param {String} email
 */
export const emailValidate = (email: EmailType): Boolean => {
  if (typeof email !== 'string') {
    throw new Error('email must be string')
  }

  const EmailReg: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return EmailReg.test(email.trim())
}

type IDCardType = string | undefined | null

/**
 * 第二代身份证校验
 * @param {String} Idcard 身份证号码
 */
export const IdCardValidate = (Idcard: IDCardType): Boolean => {
  if (typeof Idcard !== 'string') {
    throw new Error('idcard must be string')
  }

  if (Idcard.trim().length !== 18) {
    throw new Error('idcard length must be 18')
  }

  /**
   * 地址校验
   * 这个正则表达式仅仅是用作验证
   * 所以捕获组没有意义，只会占用资源，影响匹配效率，可以使用非捕获组来进行优化
   */
  const AreaReg: RegExp = /^(?:(?:1[1-5])|(?:2[1-3])|(?:3[1-7])|(?:4[1-6])|(?:5[0-4])|(?:6[1-5])|(7[1])|(8[1-2]))(?:\d{4})$/
  if (!AreaReg.test(Idcard.slice(0, 6))) {
    return false
  }

  /**
   * 日期校验
   * 这个正则表达式仅仅是用作验证
   * 所以捕获组没有意义，只会占用资源，影响匹配效率，可以使用非捕获组来进行优化
   */
  const DateReg: RegExp = /^(?:18|19|20)(?:(?:\d{2})(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/
  if (!DateReg.test(Idcard.slice(6, 14))) {
    return false
  }

  /**
   * 日期校验
   */
  const CodeReg: RegExp = /^\d{3}$/
  if (!CodeReg.test(Idcard.slice(14, 17))) {
    return false
  }

  /**
   * 尾号校验码校验
   * 加权因子 factor: 根据身份证主体码（前17位）分别与对应的加权因子（表1）计算乘积再求和
   * X与校验码换算 parity: 根据所得结果与11取模得到X值。根据 X 值查询表2，得出a18即校验码值
   */
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]

  const code: string = Idcard.slice(0, 17)
  let sum = 0
  for (let i = 0; i < code.length; i++) {
    sum += Number(code[i]) * factor[i]
  }

  if (String(parity[sum % 11]) !== String(Idcard.slice(-1).toUpperCase())) {
    return false
  }

  return true
}

type MacAddressType = string | undefined | null

/**
 * mac 地址正则校验
 * @param {String} macAddress
 */
export const MacAddressValidate = (macAddress: MacAddressType): Boolean => {
  if (typeof macAddress !== 'string') {
    throw new Error('ip address must be string')
  }

  /**
   * Mac地址有两种：
   * 58:E8:76:83:A2:C7 | 58-E8-76-83-A2-C7
   * 使用非捕获组来进行优化
   */
  const MacAddressReg: RegExp = /(?:(?:[A-Fa-f0-9]{2}:)|(?:[A-Fa-f0-9]{2}-)){5}[A-Fa-f0-9]{2}/
  if (!MacAddressReg.test(macAddress)) {
    return false
  }

  return true
}
