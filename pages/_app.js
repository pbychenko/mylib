import 'bootstrap/dist/css/bootstrap.css';
import { StoreProvider } from '../components/StoreProvider';
import Navibar from '../components/Navibar';

const App = ({ Component, pageProps }) => {
  return (    
    <StoreProvider {...pageProps}>
       <Navibar />
      <Component {...pageProps} />
    </StoreProvider>
  )
};

export default App;
