import Banner from '../../components/Banner';
import RestaurantList from '../../components/RestaurantList';
import { useGetRestaurantsQuery } from '../../services/api';

interface restaurantMenu {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type RestaurantAttributes = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: restaurantMenu[];
};

const Home = () => {
  const { data: restaurantData } = useGetRestaurantsQuery();

  if (!restaurantData) {
    return <h2>Carregando...</h2>;
  }
  return (
    <>
      <Banner />
      <div className="container">
        <RestaurantList restaurantData={restaurantData} />
      </div>
    </>
  );
};

export default Home;
