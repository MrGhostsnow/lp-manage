import { createGlobalStyle } from 'styled-components';
import BeVietnamPro from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${BeVietnamPro}
  body {
    font-family: 'Be Vietnam Pro', sans-serif;
  }
`;

export default GlobalStyle;