import { BtnAdd, DishCard, DishDescription, DishName } from './style';
import dishModel from '../../assets/images/italian-dish.png';

const Dishes = () => (
  <DishCard>
    <img src={dishModel} alt="dish model" />
    <DishName>Pizza Marguerita</DishName>
    <DishDescription>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </DishDescription>
    <BtnAdd>Adicionar ao carrinho</BtnAdd>
  </DishCard>
);

export default Dishes;
