import "@/styles"

import Header from "@/components/shared/header/Header"

import { AlertContextProvider } from "@/contexts/AlertContext"

import Providers from "@/react-query/Providers"

import RecoilRootProvider from "@/recoil/RecoilRootProvider"

export const metadata = {
  title: "My Library",
  description: "My Library App"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body>
        <RecoilRootProvider>
          <AlertContextProvider>
            <Providers>
              <Header />
              {children}
            </Providers>
          </AlertContextProvider>
        </RecoilRootProvider>
      </body>
    </html>
  )
}
