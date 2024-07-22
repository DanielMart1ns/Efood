import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) =>
    props.bgColor === 'salmon' ? colors.salmon : colors.cream};
  color: ${(props) =>
    props.bgColor === 'salmon' ? colors.cream : colors.salmon};
  text-align: center;
  width: ${(props) => (props.size === 'full' ? '100%' : 'auto')};
  padding: ${(props) => (props.size === 'full' ? '4px 0' : '4px 8px')};
  border: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)<Props>`
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) =>
    props.bgColor === 'salmon' ? colors.salmon : colors.cream};
  color: ${(props) =>
    props.bgColor === 'salmon' ? colors.cream : colors.salmon};
  text-align: center;
  width: ${(props) => (props.size === 'full' ? '100%' : 'auto')};
  padding: ${(props) => (props.size === 'full' ? '4px 0' : '4px 8px')};
  border: none;
  cursor: pointer;
`;
