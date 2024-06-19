import styled from 'styled-components';
import { colors } from '../../styles';

export const RestaurantContainer = styled.div`
  width: 472px;
  border: 1px solid ${colors.salmon};
  color: ${colors.salmon};

  img {
    width: 100%;
  }

  div {
    padding: 8px 8px 12px;
  }
`;

export const RestaurantName = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
`;

export const ButtonLeanMore = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
