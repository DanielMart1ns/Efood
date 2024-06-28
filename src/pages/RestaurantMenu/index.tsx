import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import DishesList from '../../components/DishesList';
import { useParams } from 'react-router-dom';
import { RestaurantAttributes } from '../Home';

const RestaurantMenu = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState<RestaurantAttributes>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProductData(res));
  }, [id]);

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
