import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { HeaderWrapper, H2 } from '../../styled-components';

const eventLink = id => '/event/' + id;

const EventHeader = ({ event, selected, onHover }) => {
  return (
    <HeaderWrapper
      bg={event.coverPicture}
      selected={selected}
      onMouseEnter={() => onHover(event.id)}>
      <Link to={eventLink(event.id)}>
        <span>{moment(event.startTime).fromNow()}</span>
        <H2>{event.name}</H2>
      </Link>
    </HeaderWrapper>
  );
};

export default EventHeader;
