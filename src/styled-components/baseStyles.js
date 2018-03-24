import { injectGlobal } from 'styled-components';
import reset from './reset';

const baseStyles = () => injectGlobal`
  ${reset}
  html, body {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }
`;

export default baseStyles;
