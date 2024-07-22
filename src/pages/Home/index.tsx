import { ClockLoader } from 'react-spinners';
import { useGetRestaurantsQuery } from '../../services/api';
import { colors, LoadingPage } from '../../styles';
import Banner from '../../components/Banner';
import RestaurantList from '../../components/RestaurantList';

const Home = () => {
  const { data: restaurantData } = useGetRestaurantsQuery();

  if (!restaurantData) {
    return (
      <LoadingPage>
        <ClockLoader color={colors.salmon} />
      </LoadingPage>
    );
  }
  return (
    <>
      <Banner />
      <RestaurantList restaurantData={restaurantData} />
    </>
  );
};

export default Home;
