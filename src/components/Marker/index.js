import React from 'react';

import { ClusteredIcon, Icon } from '../../styled-components';
import { icon } from './icons';

const categoryIcon = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

console.log(icon);

const Marker = ({ marker, clustered, selected, onHover }) => {
  if(clustered && clustered.length > 1) {
    return (
      <ClusteredIcon selected={selected} amount={clustered.length}>
        <Icon
          selected={selected}
          src={icon['EVENT_UNDEFINED']}
          onMouseEnter={() => onHover(marker.id)}
        />
      </ClusteredIcon>
    );
  }

  return (
    <Icon
      selected={selected}
      src={categoryIcon(marker.category)}
      onMouseEnter={() => onHover(marker.id)}
    />
  );
};

export default Marker;
