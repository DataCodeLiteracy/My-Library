import * as s from './Auth.css'

import OAuthButton from '@/components/auth/OAuthButton'

const OAuthFooter = () => {
  return (
    <div className={s.oAuthButtonWrap}>
      <OAuthButton type="/images/google.png" />
      <OAuthButton type="/images/kakao.png" />
      <OAuthButton type="/images/apple.png" />
    </div>
  )
}

export default OAuthFooter
