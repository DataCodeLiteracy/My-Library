import AuthDivider from '@/components/auth/AuthDivider'
import AuthHeader from '@/components/auth/AuthHeader'
import AuthPage from '@/components/auth/AuthPage'
import OAuthFooter from '@/components/auth/OAuthFooter'
import LogInForm from '@/components/auth/login/LogInForm'
import LoginFormView from '@/components/auth/login/LoginFormView'

const LogIn = () => {
  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <LogInForm>
        <LoginFormView />
      </LogInForm>
    </AuthPage>
  )
}

export default LogIn
