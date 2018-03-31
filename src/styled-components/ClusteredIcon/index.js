import styled from 'styled-components';

const ClusteredIcon = styled.figure`
  position: relative;
  display: block;
  float: left;
  width: auto;
  &:after {
    content: '4';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    z-index: ${props => props.selected ? '3' : 'inherit'};
    transform: translate(-50%, -70%);
  }
`;

export default ClusteredIcon;
