import React from 'react';

import { ClusteredIcon, Icon } from '../../styled-components';
import { icon } from './icons';

const categoryIcon = category => category ? icon[category] : icon['EVENT_UNDEFINED'];

const Marker = ({ marker, clustered, selected, onHover }) => {
  if(clustered && clustered.length > 1) {
    return (
      <ClusteredIcon amount={clustered.length}>
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
