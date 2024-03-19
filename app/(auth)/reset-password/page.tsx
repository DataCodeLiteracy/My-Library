import AuthHeader from '@/components/auth/AuthHeader'
import AuthPage from '@/components/auth/AuthPage'
import ResetPasswordForm from '@/components/auth/reset-password/ResetPasswordForm'
import ResetPasswordFormView from '@/components/auth/reset-password/ResetPasswordFormView'

const RestPassword = () => {
  return (
    <AuthPage header={<AuthHeader />}>
      <ResetPasswordForm>
        <ResetPasswordFormView />
      </ResetPasswordForm>
    </AuthPage>
  )
}

export default RestPassword
