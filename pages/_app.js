import { StoreProvider } from '../components/StoreProvider'
import 'bootstrap/dist/css/bootstrap.css'
import Navibar from '../components/Navibar'

export default function App({ Component, pageProps }) {
  return (    
    <StoreProvider {...pageProps}>
       <Navibar />
      <Component {...pageProps} />
    </StoreProvider>
  )
}
