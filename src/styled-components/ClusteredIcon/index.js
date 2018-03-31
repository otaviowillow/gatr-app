import styled from 'styled-components';

const ClusteredIcon = styled.figure`
  position: relative;
  display: block;
  float: left;
  width: auto;
  border: 1px solid red;
  &:after {
    content: ${props => props.amount};
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    border: 1px solid red;
    z-index: 998;
    transform: translate(-50%. -70%);
  }
`;

export default ClusteredIcon;
