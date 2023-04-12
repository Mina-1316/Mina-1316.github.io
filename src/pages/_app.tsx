import GlobalStyles from '@/components/boundary/GlobalStyles/GlobalStyles'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  )
}
