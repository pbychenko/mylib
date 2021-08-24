import { StoreProvider } from '../components/StoreProvider'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
