import React from 'react';
import { Loading } from '../../styled-components';
import NoEvents from '../NoEvents';

const EventsList = ({ loading, events, children }) => {
  if(loading) {
    return <Loading />;
  }
  if(events.length > 0) {
    return children;
  }
  return <NoEvents />;
};

export default EventsList;
