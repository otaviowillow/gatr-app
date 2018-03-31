import styled from 'styled-components';

const LoadingWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

export default LoadingWrapper;
