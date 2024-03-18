import '@/styles'

import Header from '@/components/shared/header/Header'

import Providers from '@/react-query/Providers'

import RecoilRootProvider from '@/recoil/RecoilRootProvider'

export const metadata = {
  title: 'My Library',
  description: 'My Library App'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
