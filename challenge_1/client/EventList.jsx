import React from 'react';
import EventListItem from './EventListItem.jsx';

const EventList = ({ data }) => {
  return (
    <div>
      {data.map((event, index) => (
        <EventListItem key={index} event={event} />
      ))}
    </div>
  );
};
export default EventList;
