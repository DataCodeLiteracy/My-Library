'use client'
import { createBrowserClient } from '@supabase/ssr'

import FormContext from '@/contexts/FormContext'
import { validationFunctions } from '@/utils/isValidationCheck'

import { UserInfo } from '@/interfaces/auth/auth'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useMutation } from '@tanstack/react-query'
import useAlertContext from '@/hooks/useAlertContext'

const RegisterForm = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const { open, close } = useAlertContext()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const signUpNewUser = async (values: UserInfo) => {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          displayName: values.name,
          phone: values.phoneNo
        }
      }
    })

    if (String(signUpError).includes('Email rate limit exceeded')) {
      open({
        title: '회원가입 요청 횟수 초과',
        description:
          '시간당 회원가입 요청 횟수를 초과했습니다. 잠시 후에 다시 시도해주세요.',
        onRightButtonClick: () => {
          close()
        }
      })
    }

    return data
  }

  const { mutate: register } = useMutation({
    mutationFn: signUpNewUser,
    onSuccess: (data) => {
      if (data.user !== null) router.push('/login')
    },
    onError: (error) => console.error('회원가입 실패', error)
  })

  const handleRegisterSubmit = (values: UserInfo) => {
    register(values)
  }

  return (
    <FormContext
      formType="register"
      id="register-form"
      className=""
      validate={validationFunctions}
      onSubmit={handleRegisterSubmit}
    >
      {' '}
      {children}
    </FormContext>
  )
}

export default RegisterForm
