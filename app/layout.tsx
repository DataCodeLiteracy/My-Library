import './globals.css'

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
    <html lang="en">
      <body>
        <RecoilRootProvider>
          <Providers>{children}</Providers>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
