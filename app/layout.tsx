import './globals.css'

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
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  )
}
