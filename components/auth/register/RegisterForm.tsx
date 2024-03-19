'use client'

import FormContext from '@/contexts/FormContext'
import { validationFunctions } from '@/utils/isValidationCheck'

import { ReactNode } from 'react'

const RegisterForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType="register"
      id="register-form"
      className=""
      validate={validationFunctions}
    >
      {' '}
      {children}
    </FormContext>
  )
}

export default RegisterForm
