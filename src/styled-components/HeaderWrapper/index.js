import styled from 'styled-components';
import { color } from '../constants';

const selectedBg = 'linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)';
const regularBg = (color1, color2)  => 'linear-gradient(-134deg, ' + color1 + ' 0%, ' + color2 + ' 100%)';

const HeaderWrapper = styled.div`
  background-image: ${props => props.bg ? 'url(' + props.bg + ')' : null};
  background-size: cover;
  position: relative;
  a {
    display: inline-block;
    width: 100%;
    padding: 80px 0;
  }
  &:before {
    content: '';
    position: absolute;
    background-image: ${props => props.selected ? selectedBg : regularBg(color.secundary1, color.primary1)};
    opacity: .6;
    width: 100%;
    height: 100%;
  }
  &:hover {
    &:before {
      background-image: ;
    }
  }
`;

export default HeaderWrapper;
