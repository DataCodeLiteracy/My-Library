import * as s from './Auth.css'

import { ReactNode } from 'react'

const WrapperPage = ({ children }: { children: ReactNode }) => {
  return <div className={s.authPageWrapper}>{children}</div>
}

export default WrapperPage
