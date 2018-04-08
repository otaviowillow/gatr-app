import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const DropzoneWrapper = styled(Dropzone)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: #D8D8D8;
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

export default DropzoneWrapper;
