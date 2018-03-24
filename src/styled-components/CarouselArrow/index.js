import styled from 'styled-components';

const CarouselArrow = styled.button`
  background: #ccc;
  position: absolute;
  top: 50%;
  padding: 20px;
  border: none;
  z-index: 2;
  outline: none;
  border-top-left-radius: ${props => props.forward ? '20px' : 'initial'};
  border-bottom-left-radius: ${props => props.forward ? '20px' : 'initial'};
  border-top-right-radius: ${props => props.previous ? '20px' : 'initial'};
  border-bottom-right-radius: ${props => props.previous ? '20px' : 'initial'};
  left: ${props => props.previous ? 0 : 'initial'};
  right: ${props => props.forward ? 0 : 'initial'};
  transform: translate(${props => props.forward ? '50%, -50%' : '-50%, -50%'});
  opacity: ${props => props.isDisabled ? '1' : '.3'};
  cursor: ${props => props.isDisabled ? 'pointer' : 'default'};
  &:hover {
    background: ${props => props.isDisabled ? '#999' : '#ccc'};;
  }
`;

export default CarouselArrow;
