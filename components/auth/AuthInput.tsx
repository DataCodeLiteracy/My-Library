'use client'
import * as s from './Auth.css'

import { FormValue, formContext } from '@/contexts/FormContext'

import { useContext } from 'react'

interface AuthInputProps {
  type: string
  name: string
  placeholder: string
  style?: string
  id?: string
}

const STYLE_INPUT_DEFAULT = s.inputStyle

const AuthInput = ({
  type,
  name,
  placeholder,
  style = STYLE_INPUT_DEFAULT,
  id
}: AuthInputProps) => {
  const { handleChange } = useContext(formContext) as FormValue

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
      onChange={handleChange}
      required
    />
  )
}

export default AuthInput
