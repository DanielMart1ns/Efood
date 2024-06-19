import logo from '../../assets/images/logo.svg';
import { BannerBody, Title } from './style';

const Banner = () => (
  <BannerBody>
    <img src={logo} alt="efood logo" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </BannerBody>
);

export default Banner;
