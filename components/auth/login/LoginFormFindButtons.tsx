import * as s from './Login.css'

import Button from '@/components/shared/button/Button'

import Link from 'next/link'

const PasswordResetButton = () => {
  return (
    <div className={s.resetPasswordWrap}>
      <Link href="/reset-password">
        <Button text="비밀번호 재설정하기" style={s.resetPasswordButtonStyle} />
      </Link>
    </div>
  )
}

export default PasswordResetButton
