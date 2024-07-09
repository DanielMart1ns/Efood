import styled from 'styled-components';
import { colors } from '../../styles';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  display: none;

  &.show {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`;

export const SideBar = styled.aside`
  z-index: 1;
  padding: 16px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.salmon};

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Shopping = styled.li`
  background-color: ${colors.cream};
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
  margin-top: 16px;

  .dishImage {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  .removeIcon {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const DishName = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: ${colors.salmon};
  margin-bottom: 16px;
`;

export const DishPrice = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.salmon};
`;

export const TotalPrice = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.cream};
  margin: 40px 0 16px;
`;
