import styled from 'styled-components';
import { color } from '../constants';

const LoadingWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(-134deg, ${color.primary1} 0%, ${color.primary2} 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

export default LoadingWrapper;
