import styled from 'styled-components';

const Section = styled.section`
  background-image: ${props => props.bg ? 'url("' + props.bg + '")' : 'none'};
  background-size: cover;
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  text-align: ${props => props.center ? 'center' : 'left'};
  height: ${props => props.fullscreen ? '100vh' : 'auto'};
  border: 1px solid red;
`;

export default Section;
