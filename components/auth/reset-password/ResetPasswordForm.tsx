'use client'

import FormContext from '@/contexts/FormContext'
import { validationFunctions } from '@/utils/isValidationCheck'
import { ReactNode } from 'react'

const ResetPasswordForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType="reset-password"
      id="reset-password-form"
      className=""
      validate={validationFunctions}
    >
      {children}
    </FormContext>
  )
}

export default ResetPasswordForm
