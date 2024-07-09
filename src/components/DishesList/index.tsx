import { RestaurantAttributes } from '../../pages/Home';
import Dishes from '../Dishes';
import { ListContainer } from './style';

type Props = {
  dishAttributes: RestaurantAttributes;
};

const DishesList = ({ dishAttributes }: Props) => {
  return (
    <div className="container">
      <ListContainer>
        {dishAttributes.cardapio.map((dish) => (
          <li key={dish.id}>
            <Dishes
              id={dish.id}
              picture={dish.foto}
              name={dish.nome}
              description={dish.descricao}
              portion={dish.porcao}
              price={dish.preco}
            />
          </li>
        ))}
      </ListContainer>
    </div>
  );
};
export default DishesList;
