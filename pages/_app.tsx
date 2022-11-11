import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <CSSReset />
        <NextNProgress />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}
