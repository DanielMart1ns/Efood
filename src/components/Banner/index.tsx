import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import {
  BannerBody,
  BannerLogo,
  FoodType,
  RestaurantBanner,
  RestaurantsLinks,
  Title,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../store/cart';
import { RootReducer } from '../store';

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
}: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  return (
    <BannerBody>
      <BannerLogo menuIsOpen={menuIsOpen}>
        <Link to="/" className="mobileLogoImage">
          <img src={logo} alt="efood logo" />
        </Link>
        <div className="container">
          <RestaurantsLinks to="/">Restaurantes</RestaurantsLinks>
          <Link to="/" className="desktopLogoImage">
            <img src={logo} alt="efood logo" />
          </Link>
          <p
            onClick={() => {
              dispatch(open());
            }}
            style={{ cursor: 'pointer' }}
          >
            {items.length} produtos(s) no carrinho
          </p>
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
};

export default Banner;
