import React from 'react';

import { icon } from './icons';

const cat = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

const Marker = ({ marker, selected, onHover }) => (
  <img
    style={selected ? {
      transform: 'scale(1.3, 1.3)',
      position: 'relative',
      zIndex: '999'
    } : null}
    src={cat(marker.category)}
    onMouseEnter={() => onHover(marker.id)}
  />
);

export default Marker;
