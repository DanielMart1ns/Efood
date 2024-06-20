import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background.png';
import foodRepresentation from '../../assets/images/italian-restaurant.png';
import { colors } from '../../styles';
import { Props } from '.';

export const BannerBody = styled.div`
  font-weight: 900;
`;

export const BannerLogo = styled.div<Props>`
  background-image: url(${background});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props) => (props.menuIsOpen === 'no' ? '40px 0' : '64px 0')};
  text-align: center;

  h1 {
    display: ${(props) => (props.menuIsOpen === 'no' ? 'block' : 'none')};
  }

  div {
    display: ${(props) => (props.menuIsOpen === 'no' ? 'block' : 'flex')};
    align-items: center;
    justify-content: space-around;

    p {
      display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
      font-size: 18px;
      color: ${colors.salmon};
    }
  }
`;

export const RestaurantsLinks = styled(Link)<Props>`
  display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
  font-size: 18px;
  color: ${colors.salmon};
`;

export const Title = styled.h1`
  max-width: 540px;
  margin: 140px auto 0;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.salmon};
`;

export const RestaurantBanner = styled.div<Props>`
  display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
  padding: 24px 0 32px 170px;
  background-image: url(${foodRepresentation});
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 32px;
  color: ${colors.white};
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    content: '';
    background-color: #000;
  }

  h2 {
    position: relative;
  }
`;

export const FoodType = styled.h3`
  font-weight: 100;
  margin-bottom: 157px;
  position: relative;
`;
