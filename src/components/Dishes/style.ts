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

  img {
    max-width: 304px;
    max-height: 167px;
    width: 100%;
    height: 100%;
  }
`;

export const DishName = styled.h3`
  font-size: 16px;
  font-weight: 900;
`;

export const DishDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const BtnDetails = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  &.show {
    display: grid;
    place-items: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.salmon};
  display: flex;
  padding: 32px;
  color: ${colors.cream};
  font-size: 14px;

  ${DishDescription} {
    line-height: 22px;
    margin: 16px 0 22px;
  }

  .btnClose {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .dishName {
    object-fit: cover;
    width: 280px;
    height: 280px;
    margin-right: 24px;
  }
`;

export const BtnAdd = styled.button`
  font-weight: 700;
  border: none;
  background-color: ${colors.cream};
  color: ${colors.salmon};
  padding: 4px 8px;
  margin-top: 20px;
  cursor: pointer;
`;
