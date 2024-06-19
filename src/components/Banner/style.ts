import styled from 'styled-components';
import background from '../../assets/images/background.png';
import { colors } from '../../styles';

export const BannerBody = styled.div`
  background-image: url(${background});
  height: 384px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
  text-align: center;
`;

export const Title = styled.h1`
  max-width: 540px;
  margin: 140px auto 0;
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;
  color: ${colors.salmon};
`;
