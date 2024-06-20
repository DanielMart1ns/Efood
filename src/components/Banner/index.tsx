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
};

const Banner = ({ menuIsOpen = 'no' }: Props) => (
  <BannerBody>
    <BannerLogo menuIsOpen={menuIsOpen}>
      <div>
        <RestaurantsLinks to="/" menuIsOpen={menuIsOpen}>
          Restaurantes
        </RestaurantsLinks>
        <img src={logo} alt="efood logo" />
        <p>0 produtos(s) no carrinho</p>
      </div>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </BannerLogo>
    <RestaurantBanner menuIsOpen={menuIsOpen}>
      <FoodType>Italiana</FoodType>
      <h2>La Dolce Vita Trattoria</h2>
    </RestaurantBanner>
  </BannerBody>
);

export default Banner;
