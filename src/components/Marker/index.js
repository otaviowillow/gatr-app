import React from 'react';

import { icon } from './icons';

const cat = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

const Marker = ({ marker, onHover }) => (
  <img
    style={event.selected ? {border: '1px solid red'} : null}
    src={cat(marker.category)}
    onMouseEnter={() => onHover(marker.id)}
  />
);

export default Marker;
