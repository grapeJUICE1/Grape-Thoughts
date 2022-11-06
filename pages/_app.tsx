import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
