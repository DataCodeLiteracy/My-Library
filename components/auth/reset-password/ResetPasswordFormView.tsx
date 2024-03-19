'use client'

import * as s from './ResetPassword.css'

import Button from '@/components/shared/button/Button'
import AuthInput from '../AuthInput'
import ValidationMessage from '../ValidationMessage'
import { useState } from 'react'

const ResetPasswordFormView = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  return (
    <>
      <h1 className={s.headerText}>비밀번호 재설정</h1>
      <span className={s.labelText}>비밀번호</span>
      <AuthInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <span className={s.labelText}>비밀번호 확인</span>
      <AuthInput
        type="password"
        name="rePassword"
        placeholder="비밀번호를 재입력해주세요."
      />
      {isPasswordValid && (
        <ValidationMessage text="비밀번호와 동일하게 입력해주세요." />
      )}
      <div className={s.resetPasswordButtonWrap}>
        <Button type="submit" text="비밀번호 재설정하기" />
      </div>
    </>
  )
}

export default ResetPasswordFormView
