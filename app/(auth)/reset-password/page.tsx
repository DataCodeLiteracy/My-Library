import AuthHeader from "@/components/auth/AuthHeader"
import AuthPage from "@/components/auth/AuthPage"
import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm"
import ResetPasswordFormView from "@/components/auth/reset-password/ResetPasswordFormView"

import { Suspense } from "react"

const RestPassword = () => {
  return (
    <AuthPage header={<AuthHeader />}>
      <ResetPasswordForm>
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPasswordFormView />
        </Suspense>
      </ResetPasswordForm>
    </AuthPage>
  )
}

export default RestPassword
