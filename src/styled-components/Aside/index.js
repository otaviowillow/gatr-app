import styled from 'styled-components';
import { color } from '../constants';

const Aside = styled.aside`
  position: relative;
  background: ${color.primary4};
  flex: 0 0 ${props => props.size};
  height: 100vh;
  overflow: auto;
`;

export default Aside;
