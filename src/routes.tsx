import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantMenu from './pages/RestaurantMenu';

const ComponentRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant-menu/:id" element={<RestaurantMenu />}></Route>
  </Routes>
);

export default ComponentRoutes;
