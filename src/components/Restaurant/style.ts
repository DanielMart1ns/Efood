import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';
import { TagContent } from '../Tag/style';

export const RestaurantContainer = styled.div`
  width: 472px;
  border: 1px solid ${colors.salmon};
  color: ${colors.salmon};
  position: relative;

  img {
    max-width: 472px;
    width: 100%;
    max-height: 217px;
    height: 100%;
  }

  .tagGroup {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    column-gap: 8px;

    ${TagContent} {
      padding: 6px 4px;
    }
  }

  .marketing {
    padding: 8px 8px 12px;

    .rating {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 700;
    }
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

export const ButtonLeanMore = styled(Link)`
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
