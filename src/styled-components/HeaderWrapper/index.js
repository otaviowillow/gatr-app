import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: relative;
  border: 1px solid blue;
  a {
    display: inline-block;
    padding: 80px 0;
    border: 1px solid blue;
  }
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(-134deg, #51C7FF 0%, #8407C3 100%);
    opacity: .6;
    width: 100%;
    height: 100%;
  }
`;

export default HeaderWrapper;
