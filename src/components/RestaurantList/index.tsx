import Restaurant from '../Restaurant';
import { ContainerList } from './style';
import Estabishment from '../../models/establishment';

type Props = {
  establishmentData: Estabishment[];
};

const RestaurantList = ({ establishmentData }: Props) => (
  <ContainerList>
    {establishmentData.map((establishment) => (
      <Restaurant
        key={establishment.id}
        restaurantType={establishment.restaurantType}
        emphasisProduct={establishment.emphasisProduct}
        foodTypeTag={establishment.foodTypeTag}
        restaurantName={establishment.restaurantName}
        rating={establishment.rating}
        description={establishment.description}
      />
    ))}
  </ContainerList>
);
export default RestaurantList;
