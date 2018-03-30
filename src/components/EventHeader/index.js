import React from 'react';
import { Link } from 'react-router-dom';

const eventLink = id => '/event/' + id;

const EventHeader = ({ event, onHover }) => (
  <div onMouseEnter={() => onHover(event.id)}>
    <Link to={eventLink(event.id)}>
      <h2 style={event.selected ? {border: '1px solid red'} : null}>{event.name}</h2>
    </Link>
  </div>
);

export default EventHeader;
