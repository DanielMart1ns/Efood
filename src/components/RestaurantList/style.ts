import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ContainerList = styled.ul`
  width: 100%;
  margin: 80px auto 120px !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }

  li {
    margin: auto;
  }
`;
