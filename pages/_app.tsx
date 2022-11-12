import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

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
          <Head>
            <title>Grape Thoughts</title>
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
            <meta property='og:title' content='Grape Thoughts' />
            <meta name='twitter:title' content='Grape Thoughts' />

            <meta
              property='og:description'
              content='Share your random thoughts on the internet (anonymyously)'
            />
            <meta
              name='twitter:description'
              content='Share your random thoughts on the internet (anonymyously)'
            />
            <meta
              property='description'
              content='Share your random thoughts on the internet (anonymyously)'
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}
