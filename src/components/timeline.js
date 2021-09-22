import React from 'react';
import TimelineSection from './timelineSection';
import { getCurrentDate } from '../utils/date';

const Timeline = ({ events }) => {
  var upcoming = [];
  var passed = [];
  var reversed = false;
  var color = 'white';

  // here map all the events and divide them into the passed x upcoming by date.
  events.map((event) =>
    event.date > getCurrentDate() ? upcoming.push(event) : passed.push(event)
  );

  // if upcoming events is ODD - PAST events will be reversed.
  if (upcoming.length % 2 !== 0) {
    reversed = true;
  }

  return (
    <div
      style={{ paddingTop: 80 }}
      className={`center bg-${upcoming.length > 0 ? color : 'black'}`}
    >
      <h2>Timeline</h2>
      <p>of upcoming and passed events</p>
      {upcoming.length !== 0 && (
        <TimelineSection events={upcoming} color={color} />
      )}
      {passed.length !== 0 && (
        <TimelineSection
          events={passed.reverse()}
          color='black'
          title='events that have passed'
          reversed={reversed}
        />
      )}
    </div>
  );
};
export default Timeline;
