import logo from '../../assets/images/logo.svg';
import {
  BannerBody,
  BannerLogo,
  FoodType,
  RestaurantBanner,
  RestaurantsLinks,
  Title,
} from './style';

export type Props = {
  menuIsOpen?: 'no' | 'yes';
  restaurantBanner?: string;
  foodType?: string;
  restaurantName?: string;
};

const Banner = ({
  menuIsOpen = 'no',
  restaurantBanner,
  foodType,
  restaurantName,
}: Props) => (
  <BannerBody>
    <BannerLogo menuIsOpen={menuIsOpen}>
      <div className="container">
        <RestaurantsLinks to="/">Restaurantes</RestaurantsLinks>
        <img src={logo} alt="efood logo" />
        <p>0 produtos(s) no carrinho</p>
      </div>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </BannerLogo>
    <RestaurantBanner
      menuIsOpen={menuIsOpen}
      restaurantBanner={restaurantBanner}
    >
      <div className="container">
        <FoodType>{foodType}</FoodType>
        <h2>{restaurantName}</h2>
      </div>
    </RestaurantBanner>
  </BannerBody>
);

export default Banner;
