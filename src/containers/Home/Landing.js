import styled from 'styled-components';
import { Section } from '../../styled-components/';
import { color } from '../../styled-components/constants';

const Landing = styled(Section)`
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-image: linear-gradient(-134deg, ${color.primary1} 0%, ${color.primary2} 100%);
    opacity: .7;
  }
  * {
    position: relative;
    z-index: 3;
  }
`;

export default Landing;
