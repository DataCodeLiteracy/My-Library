"use client"

import * as s from "./ResetPassword.css"

import Button from "@/components/shared/button/Button"
import { FormValue, formContext } from "@/contexts/FormContext"
import { supabase } from "@/utils/supabase/client"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import AuthInput from "../AuthInput"
import { useRouter, useSearchParams } from "next/navigation"
import ValidationMessages from "../ValidationMessages"
import ValidationMessage from "../ValidationMessage"
import useAlertContext from "@/hooks/useAlertContext"

const ResetPasswordFormView = () => {
  const searchParams = useSearchParams()
  const reset = searchParams.get("reset")

  const router = useRouter()
  const { values, isValid, isEmpty } = useContext(formContext) as FormValue
  const { open, close } = useAlertContext()

  const sendEmail = async () => {
    const { data, error: sendEmailError } =
      await supabase.auth.resetPasswordForEmail(values?.email as string, {
        redirectTo: "http://localhost:3000/reset-password?reset=reset"
      })

    if (String(sendEmailError).includes("Email rate limit exceeded")) {
      open({
        title: "이메일 요청 횟수 초과",
        description:
          "시간당 이메일 요청 횟수를 초과했습니다. 잠시 후에 다시 시도해주세요.",
        onRightButtonClick: () => {
          close()
        }
      })
    }

    return data
  }

  const modifyPassword = async () => {
    await supabase.auth.updateUser({ password: values?.password as string })
  }

  const { mutate: sendEmailMutate } = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      if (data !== null) {
        console.log("비밀번호 재설정 이메일 발송 성공")
      }
    },
    onError: (error) =>
      console.error("비밀번호 재설정 이메일 발송 실패:", error)
  })

  const { mutate: modifyPasswordMutate } = useMutation({
    mutationFn: modifyPassword,
    onSuccess: (data) => {
      if (data !== null) {
        console.log("비밀번호 재설정 성공")
        router.push("/login")
      }
    },
    onError: (error) => console.error("비밀번호 재설정 실패:", error)
  })

  const handleSendEmail = () => {
    sendEmailMutate()
  }

  const handleResetPassword = () => {
    if (
      isValid?.password &&
      isValid?.rePassword &&
      !isEmpty?.password &&
      !isEmpty?.rePassword
    ) {
      modifyPasswordMutate()
    }
  }

  if (reset === "reset") {
    return (
      <>
        <h1 className={s.headerText}>비밀번호 재설정</h1>
        <span className={s.labelText}>비밀번호</span>
        <AuthInput
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
        />
        <ValidationMessages name='password'>
          <ValidationMessage text='영문/숫자/특수문자 2가지 이상 조합 (8~20자)' />
          <ValidationMessage text='3개 이상 연속되거나 동일한 문자/숫자 제외' />
        </ValidationMessages>
        <span className={s.labelText}>비밀번호 확인</span>
        <AuthInput
          type='password'
          name='rePassword'
          placeholder='비밀번호를 재입력해주세요'
        />
        <ValidationMessages name='rePassword'>
          <ValidationMessage text='비밀번호가 일치하지 않습니다.' />
        </ValidationMessages>
        <div className={s.resetPasswordButtonWrap}>
          <Button
            type='submit'
            text='비밀번호 재설정하기'
            onClick={handleResetPassword}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className={s.headerText}>비밀번호 재설정</h1>
      <span className={s.labelText}>이메일</span>
      <AuthInput
        type='text'
        name='email'
        placeholder='비밀번호 재설정 메일을 보낼 이메일을 입력해주세요.'
      />
      <div className={s.resetPasswordButtonWrap}>
        <Button
          type='submit'
          text='비밀번호 재설정 이메일 보내기'
          onClick={handleSendEmail}
        />
      </div>
    </>
  )
}

export default ResetPasswordFormView
