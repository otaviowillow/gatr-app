import styled from 'styled-components';

const Icon = styled.img`
  position: relative;
  transform: ${props => props.selected ? 'scale(1.3, 1.3)' : 'scale(1, 1)'};
  z-index: ${props => props.selected ? '2' : 'inherit'};
`;

export default Icon;
