import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/images/background.png';
import { breakpoints, colors } from '../../styles';
import { Props } from '.';

export const BannerBody = styled.div`
  font-weight: 900;
  width: 100%;
  margin: auto;
`;

export const RestaurantsLinks = styled(Link)`
  font-size: 18px;
  color: ${colors.salmon};
  width: 250px;
  text-align: left;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const BannerLogo = styled.div<Omit<Props, 'restaurantBanner'>>`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props) => (props.menuIsOpen === 'no' ? '40px 0' : '30px 0 64px')};
  text-align: center;

  h1 {
    display: ${(props) => (props.menuIsOpen === 'no' ? 'block' : 'none')};
  }

  div {
    display: ${(props) => (props.menuIsOpen === 'no' ? 'block' : 'flex')};
    align-items: center;
    justify-content: space-between;

    p {
      display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
      font-size: 18px;
      color: ${colors.salmon};
      width: 250px;
      text-align: right;
      @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
        text-align: right;
      }
    }

    @media (max-width: ${breakpoints.desktop}) {
      justify-content: space-around;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 20px;
    }
  }

  .mobileLogoImage {
    display: none;
  }

  ${RestaurantsLinks} {
    display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 40px;

    .mobileLogoImage {
      display: block;
    }

    .desktopLogoImage {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  max-width: 540px;
  margin: 140px auto 0;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.salmon};

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 40px;
    font-size: 24px;
  }
`;

export const RestaurantBanner = styled.div<Props>`
  display: ${(props) => (props.menuIsOpen === 'no' ? 'none' : 'block')};
  padding: 24px 0 32px;
  background-image: url(${(props) => props.restaurantBanner});
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
