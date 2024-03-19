import AuthDivider from '@/components/auth/AuthDivider'
import AuthHeader from '@/components/auth/AuthHeader'
import AuthPage from '@/components/auth/AuthPage'
import OAuthFooter from '@/components/auth/OAuthFooter'
import RegisterForm from '@/components/auth/register/RegisterForm'
import RegisterFormView from '@/components/auth/register/RegisterFormView'

const Register = () => {
  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <RegisterForm>
        <RegisterFormView />
      </RegisterForm>
    </AuthPage>
  )
}

export default Register
