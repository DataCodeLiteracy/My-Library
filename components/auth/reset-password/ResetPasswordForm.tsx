"use client"

import FormContext from "@/contexts/FormContext"

import { ReactNode } from "react"

import { validationFunctions } from "@/utils/isValidationCheck"

const ResetPasswordForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType='reset-password'
      id='reset-password-form'
      className=''
      validate={validationFunctions}
    >
      {children}
    </FormContext>
  )
}

export default ResetPasswordForm
