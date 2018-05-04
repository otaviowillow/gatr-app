import styled from 'styled-components';
import { color } from '../constants';

const ContentWrapper = styled.div`
  background-image: ${props => props.centered ? 'linear-gradient(-90deg, ' + color.accent1 + ' 0%, ' + color.primary1 + ' 100%)' : 'transparent'};
  display: flex;
  height: 100vh;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
  h2 {
    color: ${props => props.temp ? 'purple' : 'white' };
    padding: ${props => props.temp ? '0 0 20px 0' : '0' };
  }
  p {
    padding: ${props => props.temp ? '0 0 20px 0' : '0' };
    border: none;
  }
`;

export default ContentWrapper;
