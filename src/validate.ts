type EmailType = string | undefined | null

export const emailValidate = (email: EmailType): Boolean => {
  if (typeof email !== 'string') {
    throw new Error('email must be string')
  }

  const EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return EmailReg.test(email)
}
