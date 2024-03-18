import * as s from './Auth.css'

import { ReactNode } from 'react'

interface SectionProps {
  className?: string
  children: ReactNode
}

const AuthSection = ({
  className = s.authSectionDefault,
  children
}: SectionProps) => {
  return <section className={className}>{children}</section>
}

export default AuthSection
