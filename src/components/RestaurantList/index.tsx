import Restaurant from '../Restaurant';
import { ContainerList } from './style';

type Props = {
  restaurantData: RestaurantAttributes[];
};

const RestaurantList = ({ restaurantData }: Props) => (
  <ContainerList className="container">
    {restaurantData.map((establishment) => (
      <li key={establishment.id}>
        <Restaurant
          id={establishment.id}
          titulo={establishment.titulo}
          destacado={establishment.destacado}
          tipo={establishment.tipo}
          avaliacao={establishment.avaliacao}
          descricao={establishment.descricao}
          capa={establishment.capa}
        />
      </li>
    ))}
  </ContainerList>
);

export default RestaurantList;
