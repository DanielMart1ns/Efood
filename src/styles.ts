import { styled, createGlobalStyle } from 'styled-components';

export const breakpoints = {
  desktop: '1024px',
  mobile: '768px',
};

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}){
          padding: 0 32px;
        }
    }
`;

export const colors = {
  salmon: '#E66767',
  cream: '#FFEBD9',
  white: '#fff',
};

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
  overflow-y: scroll;
`;
