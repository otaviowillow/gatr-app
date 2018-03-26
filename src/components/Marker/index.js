import React from 'react';

import { icon } from './icons';

const cat = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

const Marker = ({ marker }) => (
  <img src={cat(marker.category)} />
);

export default Marker;
