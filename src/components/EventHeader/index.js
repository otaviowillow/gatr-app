import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { HeaderWrapper } from '../../styled-components';

const eventLink = id => '/event/' + id;

const EventHeader = ({ event, onHover }) => {
  const start = moment(event.startTime);
  const end = moment(event.endTime);
  const now = moment();

  if(start < now) {
    return (
      <HeaderWrapper onMouseEnter={() => onHover(event.id)} style={event.selected ? {border: '1px solid red'} : null}>
        <Link to={eventLink(event.id)}>
          <span>NOW</span>
          <h2>{event.name}</h2>
        </Link>
      </HeaderWrapper>
    );
  }

  if(now > end) {
    return null;
  }

  return (
    <HeaderWrapper onMouseEnter={() => onHover(event.id)} style={event.selected ? {border: '1px solid red'} : null}>
      <Link to={eventLink(event.id)}>
        <span>{moment(event.startTime).fromNow()}</span>
        <h2>{event.name}</h2>
      </Link>
    </HeaderWrapper>
  );
};

export default EventHeader;
