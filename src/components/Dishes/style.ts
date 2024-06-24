import styled from 'styled-components';
import { colors } from '../../styles';

export const DishCard = styled.div`
  padding: 8px;
  width: 320px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  background-color: ${colors.salmon};
  color: ${colors.cream};
`;

export const DishName = styled.h3`
  font-size: 16px;
  font-weight: 900;
`;

export const DishDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const BtnAdd = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
