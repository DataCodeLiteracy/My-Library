import AuthHeader from '@/components/auth/AuthHeader'
import AuthPage from '@/components/auth/AuthPage'
import RegisterForm from '@/components/auth/register/RegisterForm'
import RegisterFormView from '@/components/auth/register/RegisterFormView'

const Register = () => {
  return (
    <AuthPage header={<AuthHeader />}>
      <RegisterForm>
        <RegisterFormView />
      </RegisterForm>
    </AuthPage>
  )
}

export default Register
