import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuRestaurant from './pages/MenuRestaurant';

const ComponentRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuRestaurant />}></Route>
  </Routes>
);

export default ComponentRoutes;
