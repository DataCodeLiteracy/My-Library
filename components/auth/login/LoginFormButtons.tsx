import * as s from './Login.css'

import Button from '@/components/shared/button/Button'

import Link from 'next/link'

const LoginFormButtons = () => {
  return (
    <>
      <Button text="로그인" type="submit" />
      <Link href="/register">
        <Button text="회원가입" style={s.whiteButtonStyle} />
      </Link>
    </>
  )
}

export default LoginFormButtons
