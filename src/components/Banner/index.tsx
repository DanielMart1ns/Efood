import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { openCart } from '../store/cart';
import { RootReducer } from '../store';

import logo from '../../assets/images/logo.svg';

import * as S from './style';

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
    <S.BannerBody>
      <S.BannerLogo menuIsOpen={menuIsOpen}>
        <Link to="/" className="mobileLogoImage">
          <h1>
            <img src={logo} alt="Efood" />
          </h1>
        </Link>
        <div className="container">
          <S.RestaurantsLinks to="/">Restaurantes</S.RestaurantsLinks>
          <Link to="/" className="desktopLogoImage">
            <img src={logo} alt="efood logo" />
          </Link>
          <p
            onClick={() => {
              dispatch(openCart());
            }}
            style={{ cursor: 'pointer' }}
          >
            {items.length} produtos(s) no carrinho
          </p>
        </div>
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.BannerLogo>
      <S.RestaurantBanner
        menuIsOpen={menuIsOpen}
        restaurantBanner={restaurantBanner}
      >
        <div className="container">
          <S.FoodType>{foodType}</S.FoodType>
          <h2>{restaurantName}</h2>
        </div>
      </S.RestaurantBanner>
    </S.BannerBody>
  );
};

export default Banner;
