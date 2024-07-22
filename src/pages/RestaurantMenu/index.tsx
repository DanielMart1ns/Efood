import { useParams } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

import { colors, LoadingPage } from '../../styles';
import Banner from '../../components/Banner';
import DishesList from '../../components/DishesList';

import { useGetDishesQuery } from '../../services/api';

const RestaurantMenu = () => {
  const { id } = useParams();
  const { data: productData } = useGetDishesQuery(id!);

  if (!productData) {
    return (
      <LoadingPage>
        <ClockLoader color={colors.salmon} />
      </LoadingPage>
    );
  }

  return (
    <>
      <Banner
        menuIsOpen="yes"
        restaurantBanner={productData.capa}
        restaurantName={productData.titulo}
        foodType={productData.tipo}
      />
      <DishesList dishAttributes={productData} />
    </>
  );
};

export default RestaurantMenu;
