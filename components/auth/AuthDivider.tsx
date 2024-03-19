import * as s from './Auth.css'

const AuthDivider = () => {
  return (
    <>
      <hr className={s.authDividerLine} />
      <span className={s.authDividerText}>또는</span>
      <hr className={s.authDividerLine} />
    </>
  )
}

export default AuthDivider
