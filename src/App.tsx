import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import ComponentRoutes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ComponentRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
