import React from 'react';

import { icon } from './icons';

const categoryIcon = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

const Marker = ({ marker, clustered, selected, onHover }) => {
  if(clustered && clustered.length > 1) {
    return (
      <div style={selected ? {
        position: 'relative',
        display: 'block',
        float: 'left',
        width: 'auto',
        transform: 'scale(1.3, 1.3)',
        zIndex: '999'
      } : {
        position: 'relative',
        display: 'block',
        float: 'left',
        width: 'auto'
      }}>
        <span style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: 'white',
          transform: 'translate(-50%, -70%)'
        }}>{clustered.length}</span>
        <img
          src={icon['EVENT_UNDEFINED']}
          onMouseEnter={() => onHover(marker.id)}
        />
      </div>
    );
  }

  return (
    <img
      style={selected ? {
        transform: 'scale(1.3, 1.3)',
        position: 'relative',
        zIndex: '999'
      } : null}
      src={categoryIcon(marker.category)}
      onMouseEnter={() => onHover(marker.id)}
    />
  );
};

export default Marker;
