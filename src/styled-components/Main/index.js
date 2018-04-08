import styled from 'styled-components';

const Main = styled.main`
  background: white;
  flex: 0 0 ${props => props.size};
  height: 100vh;
  overflow: auto;
`;

export default Main;
