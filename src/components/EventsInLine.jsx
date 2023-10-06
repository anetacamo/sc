import React from 'react';
import TimelineEvent from './TimelineEvent';

const EventsInLine = ({ color, title, events }) => {
  return (
    <section className={`center bg-${color}`}>
      <h2>{title}</h2>
      <div className='flex-wrap flex-center'>
        {events.map(
          (event, index) =>
            index < 3 && (
              <TimelineEvent
                key={index}
                event={event}
                color={color}
                nameClass='carousel-event'
              />
            )
        )}
      </div>
    </section>
  );
};
export default EventsInLine;
