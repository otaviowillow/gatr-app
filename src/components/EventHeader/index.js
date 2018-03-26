import React from 'react';
import { Link } from 'react-router-dom';

const eventLink = id => '/event/' + id;

const EventHeader = ({ event }) => (
  <div>
    <Link to={eventLink(event.id)}>
      <h2>{event.name}</h2>
    </Link>
  </div>
);

export default EventHeader;
