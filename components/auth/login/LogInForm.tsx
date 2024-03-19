'use client'

import { UserInfo } from '@/interfaces/auth/auth'

import FormContext from '@/contexts/FormContext'
import { validationFunctions } from '@/utils/isValidationCheck'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import useAlertContext from '@/hooks/useAlertContext'
import { useMutation } from '@tanstack/react-query'
import { supabase } from '@/utils/supabase/client'
import { setLocalToken } from '@/utils/localToken'
import authState from '@/recoil/authAtom'
import { useSetRecoilState } from 'recoil'

export type LoginUserInfo = {
  email: UserInfo['email']
  password: UserInfo['password']
}

const LogInForm = ({ children }: { children: ReactNode }) => {
  const setAuthStateValue = useSetRecoilState(authState)
  const router = useRouter()
  const { open, close } = useAlertContext()

  async function signInWithEmail({ email, password }: LoginUserInfo) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    return data
  }

  const { mutate: login } = useMutation({
    mutationFn: signInWithEmail,
    onSuccess: (data) => {
      if (data.user !== null) {
        const accessToken = data.session?.access_token as string
        setLocalToken(accessToken)
        setAuthStateValue((prev) => ({ ...prev, isLoggedIn: true }))
        router.push('/')
      }
    },
    onError: (error) => {
      open({
        title: '아이디나 비밀번호가 잘못 입력되었습니다.',
        onRightButtonClick: () => {
          close()
          console.error(error)
        }
      })
    }
  })

  const handleLoginSubmit = (values: LoginUserInfo) => {
    const { email, password } = values
    login({ email, password })
  }

  return (
    <FormContext
      formType="login"
      id="login-form"
      className=""
      validate={validationFunctions}
      onSubmit={handleLoginSubmit}
    >
      {children}
    </FormContext>
  )
}

export default LogInForm
