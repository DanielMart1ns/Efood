import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles';
import ComponentRoutes from './routes';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { store } from './components/store';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ComponentRoutes />
        <Footer />
        <Cart />
        <CheckoutForm />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
