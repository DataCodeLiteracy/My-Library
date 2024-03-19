import RegisterFormButtons from '@/components/auth/register/RegisterFormButtons'
import RegisterFormMain from '@/components/auth/register/RegisterFormMain'

import { FormValue } from '@/contexts/FormContext'

const RegisterFormView = ({}: FormValue) => {
  return (
    <>
      <RegisterFormMain />
      <RegisterFormButtons />
    </>
  )
}

export default RegisterFormView
