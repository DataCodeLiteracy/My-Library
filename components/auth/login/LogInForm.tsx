'use client'

import { UserInfo } from '@/interfaces/auth/auth'

import FormContext from '@/contexts/FormContext'
import { validationFunctions } from '@/utils/isValidationCheck'

import { ReactNode } from 'react'

export type LoginUserInfo = {
  email: UserInfo['email']
  password: UserInfo['password']
}

const LogInForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType="login"
      id="login-form"
      className=""
      validate={validationFunctions}
    >
      {children}
    </FormContext>
  )
}

export default LogInForm
