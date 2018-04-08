import React from 'react';
import faCameraRetro from '@fortawesome/fontawesome-free-solid/faCameraRetro';

import { DropzoneWrapper, FaIcon } from '../../styled-components';

const ImageDrop = ({setEventImage, image}) => {
  console.log(image);
  if(image) {
    return (
      <DropzoneWrapper onDrop={setEventImage}>
        <img src={image.preview} />
      </DropzoneWrapper>
    );
  }

  return (
    <DropzoneWrapper onDrop={setEventImage}>
      <FaIcon icon={faCameraRetro} size="5x" />
      <p>Drag or click to upload a image</p>
    </DropzoneWrapper>
  );
};

export default ImageDrop;
