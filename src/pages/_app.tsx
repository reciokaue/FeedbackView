import { Providers } from '@/lib/providers'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
