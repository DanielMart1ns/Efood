import styled from 'styled-components';
import { colors, SideBar } from '../../styles';

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;

  &.show-form {
    display: flex;
  }

  .margin-bottom {
    margin-bottom: 8px;
  }

  .margin-y {
    margin: 8px 0;
  }

  ${SideBar} {
    position: relative;
    overflow-y: auto;
    padding-top: 32px;
    font-weight: 700;

    h3 {
      font-size: 16px;
      color: ${colors.cream};
      margin-bottom: 16px;
    }

    label {
      font-size: 14px;
      color: ${colors.cream};
      display: block;
      cursor: pointer;
    }

    input {
      background-color: ${colors.cream};
      padding: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #4b4b4b;
      height: 32px;
      width: 100%;
      border: 3px solid ${colors.cream};

      &.error {
        border-radius: 10px;
        border: 3px solid darkred;
      }
    }

    .nav-form-section {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
`;

export const SplitFields = styled.div`
  display: flex;
  column-gap: 34px;
  div {
    width: 155px;
  }

  .card-number {
    width: 228px;
  }

  .card-code {
    width: 87px;
  }
`;
