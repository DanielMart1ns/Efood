import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FooterContainer = styled.div`
  background-color: ${colors.cream};
  text-align: center;
  padding: 40px 0;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 8px;
  margin-top: 32px;
`;

export const FooterDescription = styled.p`
  color: ${colors.salmon};
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  margin: 80px auto 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`;
