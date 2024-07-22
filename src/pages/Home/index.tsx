import { useGetRestaurantsQuery } from '../../services/api';
import Banner from '../../components/Banner';
import RestaurantList from '../../components/RestaurantList';

const Home = () => {
  const { data: restaurantData } = useGetRestaurantsQuery();

  if (!restaurantData) {
    return <h2>Carregando...</h2>;
  }
  return (
    <>
      <Banner />
      <RestaurantList restaurantData={restaurantData} />
    </>
  );
};

export default Home;
