import React from 'react';

// add styling
const EventList = ({ event }) => {
  return (
    <div>
      <p>{event.description}</p>
    </div>
  );
};
export default EventList;
