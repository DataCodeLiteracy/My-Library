import * as s from './Login.css'

import AuthInput from '@/components/auth/AuthInput'
import ValidationMessage from '@/components/auth/ValidationMessage'
import ValidationMessages from '@/components/auth/ValidationMessages'
import PasswordResetButton from './LoginFormFindButtons'

const LoginFormMain = () => {
  return (
    <>
      <h1 className={s.headerText}>로그인</h1>
      <span className={s.labelText}>아이디</span>
      <AuthInput type="text" name="email" placeholder="아이디를 입력해주세요" />
      <ValidationMessages name="email">
        <ValidationMessage text="이메일 형식에 맞게 입력해주세요." />
      </ValidationMessages>
      <span className={s.labelText}>비밀번호</span>
      <AuthInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <div>
        <PasswordResetButton />
      </div>
    </>
  )
}

export default LoginFormMain
