'use client'

import * as s from './Register.css'

import Button from '@/components/shared/button/Button'

import { FormValue, formContext } from '@/contexts/FormContext'

import { useContext, useEffect, useState } from 'react'

const RegisterFormButtons = () => {
  const { isValid } = useContext(formContext) as FormValue
  const [isAllValidCheck, setIsAllValidCheck] = useState(false)

  useEffect(() => {
    if (isValid) {
      setIsAllValidCheck(
        Object.values(isValid).every((value) => value === true)
      )
    }
  }, [isValid])

  return (
    <div className={s.registerButtonWrap}>
      <Button text="가입하기" type="submit" disabled={!isAllValidCheck} />
    </div>
  )
}

export default RegisterFormButtons
