import Tag from '../Tag';
import {
  ButtonLeanMore,
  Description,
  RestaurantContainer,
  RestaurantName,
} from './style';

type Props = {
  restaurantType: string;
  emphasisProduct?: string;
  foodTypeTag: string;
  restaurantName: string;
  rating: number;
  description: string;
};

const Restaurant = ({
  restaurantType,
  emphasisProduct,
  foodTypeTag,
  restaurantName,
  rating,
  description,
}: Props) => {
  return (
    <RestaurantContainer>
      <img src={restaurantType} alt="Japanese Restaurant" />
      <div className="tagGroup">
        {emphasisProduct !== undefined && (
          <>
            <Tag>{emphasisProduct}</Tag>
            <Tag>{foodTypeTag}</Tag>
          </>
        )}
        {emphasisProduct === undefined && <Tag>{foodTypeTag}</Tag>}
      </div>
      <div>
        <div className="rating">
          <RestaurantName>{restaurantName}</RestaurantName>
          <p>
            {rating} <span>⭐</span>
          </p>
        </div>
        <Description>{description}</Description>
        <ButtonLeanMore>Saiba mais</ButtonLeanMore>
      </div>
    </RestaurantContainer>
  );
};

export default Restaurant;
