import React from 'react';

import { H2, EmptyWrapper } from '../../styled-components';

import NoEventsGuy from './NoEventsGuy.svg';

const NoEvents = () => {
  return (
    <EmptyWrapper>
      <img src={NoEventsGuy} />
      <H2>No events near</H2>
      <p>Try searching in a different location.</p>
      <p>Or start a party!</p>
    </EmptyWrapper>
  );
};

export default NoEvents;
