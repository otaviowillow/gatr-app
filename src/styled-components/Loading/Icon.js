import styled, { keyframes } from 'styled-components';

const inAndOut = keyframes`
    0% {
        opacity: 0;
        transform: translate(0px, -25px);
    }
    20% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    100% {
        opacity: 0;
        transform: translate(0px, 25px);
    }
`;

const Icon = styled.i`
    opacity: 0;
    color: white;
    font-size: 1.5em;
    padding: 0 4%;
    animation: ${inAndOut} 2s ease-out infinite;
`;

export default Icon;
