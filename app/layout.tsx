import "@/styles"

import Header from "@/components/shared/header/Header"

import { AlertContextProvider } from "@/contexts/AlertContext"

import Providers from "@/react-query/Providers"

import RecoilRootProvider from "@/recoil/RecoilRootProvider"
import Head from "next/head"

// export const metadata = {
//   title: "My Library",
//   description: "My Library App",
//   viewport: "width=device-width, initial-scale=1, maximum-scale=1"
// }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <Head>
        <title>My Library</title>
        <meta name='description' content='My Library App' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
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
