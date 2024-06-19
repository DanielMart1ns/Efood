import styled from 'styled-components';
import { colors } from '../../styles';

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
  list-style: none;
`;

export const FooterDescription = styled.p`
  color: ${colors.salmon};
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  margin: 80px auto 0;
`;
