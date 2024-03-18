import * as s from './Auth.css'

import AuthSection from '@/components/auth/AuthSection'
import WrapperPage from '@/components/auth/WrapperPage'

import { ReactNode } from 'react'

export interface PageComponentProps {
  header: ReactNode
  children: ReactNode
  divider?: ReactNode
  footer?: ReactNode
}

const AuthPage = ({
  header,
  children,
  divider,
  footer
}: PageComponentProps) => {
  return (
    <div className={s.authPageContainer}>
      <AuthSection>
        <WrapperPage>
          <header className={s.authPageHeader}>{header}</header>
          <main>{children}</main>
          <div className={s.authPageDivider}>{divider}</div>
          <div className={s.authPageFooter}>{footer}</div>
        </WrapperPage>
      </AuthSection>
    </div>
  )
}

export default AuthPage
