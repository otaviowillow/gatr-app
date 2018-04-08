import styled from 'styled-components';
import { color } from '../constants';

const ContentWrapper = styled.div`
  background-image: ${props => props.centered ? 'linear-gradient(-90deg, ' + color.accent1 + ' 0%, ' + color.primary1 + ' 100%)' : 'transparent'};
  display: flex;
  height: 100vh;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
`;

export default ContentWrapper;
