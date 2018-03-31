import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { HeaderWrapper } from '../../styled-components';

const eventLink = id => '/event/' + id;

const EventHeader = ({ event, selected, onHover }) => {
  // const start = moment(event.startTime);
  // const end = moment(event.endTime);
  // const now = moment();

  return (
    <HeaderWrapper
      bg={event.coverPicture}
      selected={selected}
      onMouseEnter={() => onHover(event.id)}>
      <Link to={eventLink(event.id)}>
        <span>{moment(event.startTime).fromNow()}</span>
        <h2>{event.name}</h2>
      </Link>
    </HeaderWrapper>
  );
};

export default EventHeader;
