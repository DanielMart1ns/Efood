import { useParams } from 'react-router-dom';

import Banner from '../../components/Banner';
import DishesList from '../../components/DishesList';

import { useGetDishesQuery } from '../../services/api';

const RestaurantMenu = () => {
  const { id } = useParams();
  const { data: productData } = useGetDishesQuery(id!);

  if (!productData) {
    return <h2>Carregando...</h2>;
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
