import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import ComponentRoutes from './routes';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ComponentRoutes />
      <Footer />
      {/* <Cart /> */}
    </BrowserRouter>
  );
}

export default App;
