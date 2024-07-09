import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles';
import ComponentRoutes from './routes';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { store } from './components/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ComponentRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
