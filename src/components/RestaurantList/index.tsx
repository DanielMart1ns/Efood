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
        restaurantType={establishment.restaurantType}
        restaurantName={establishment.restaurantName}
        description={establishment.description}
      />
    ))}
  </ContainerList>
);
export default RestaurantList;
