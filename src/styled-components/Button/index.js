import styled from 'styled-components';
import { color } from '../constants';

const type = {
  primary: {
    backgroundImage: 'linear-gradient(-134deg, ' + color.accent1 + ' 0%, ' + color.accent2 + ' 100%)'
  }
};

const Button = styled.button`
  background-image: ${props => type[props.type]};
`;

export default Button;
