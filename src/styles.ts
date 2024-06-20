import { createGlobalStyle } from 'styled-components';

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
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }
`;

export const colors = {
  salmon: '#E66767',
  cream: '#FFEBD9',
  white: '#fff',
};
