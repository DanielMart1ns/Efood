import {
  ButtonLeanMore,
  Description,
  RestaurantContainer,
  RestaurantName,
} from './style';

type Props = {
  restaurantType: string;
  restaurantName: string;
  description: string;
};

const Restaurant = ({ restaurantType, restaurantName, description }: Props) => (
  <RestaurantContainer>
    <img src={restaurantType} alt="Japanese Restaurant" />

    <div>
      <RestaurantName>{restaurantName}</RestaurantName>
      <Description>{description}</Description>;
      <ButtonLeanMore>Saiba mais</ButtonLeanMore>
    </div>
  </RestaurantContainer>
);

export default Restaurant;
