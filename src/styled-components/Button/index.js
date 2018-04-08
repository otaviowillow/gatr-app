import styled from 'styled-components';
import { color } from '../constants';

const type = {
  submit: {
    backgroundImage: 'linear-gradient(-90deg, ' + color.accent1 + ' 0%, ' + color.accent2 + ' 100%)'
  }
};

const Button = styled.button`
  ${props => type[props.type]};
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
`;

export default Button;
