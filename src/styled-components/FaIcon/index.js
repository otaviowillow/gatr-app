import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const inAndOut = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, -25px);
  }
  20% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  100% {
    opacity: 0;
    transform: translate(0px, 25px);
  }
`;

const animation = {
  inAndOut: {
    animation: inAndOut + ' 2s ease-out infinite'
  }
};

const FaIcon = styled(FontAwesomeIcon)`
  ${props => animation[props.animation]};
  color: white;
  padding: 0 4%;
  opacity: ${props => props.animation ? '0' : '1'};
  height: ${props => props.animation ? '200px' : 'auto'};
`;

export default FaIcon;
