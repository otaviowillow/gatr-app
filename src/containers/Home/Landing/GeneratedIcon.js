import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
	0% {
    transform: scale(0, 0);
  }
  2% {
    transform: scale(1.8, 1.8);
  }
  4% {
    transform: scale(.8, .8);
  }
  8% {
    transform: scale(1.4, 1.4);
  }
  90% {
    transform: scale(1.4, 1.4);
  }
  96% {
    transform: scale(.3, .3);
  }
  98% {
    transform: scale(1.6, 1.6);
  }
  100% {
    transform: scale(0, 0);
  }
`;

const GeneratedIcon = styled.img`
  position: absolute;
  z-index: 1;
  transform: scale(0, 0);
  transform-origin: bottom;
  top: ${props => props.top + '%'};
  left: ${props => props.left + '%'};
  animation: ${rotate360} 10s;
`;

export default GeneratedIcon;
