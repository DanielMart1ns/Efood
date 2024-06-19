import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles';
import ComponentRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ComponentRoutes />
    </BrowserRouter>
  );
}

export default App;
