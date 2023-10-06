import React from 'react';
import Event from '../components/Event';
import MetaTags from '../components/MetaTags';
import Timeline from '../components/Timeline';
import eventTypes from '../texts/event-types.json';
import events from '../texts/events.json';
import { slugify } from '../utils/slugify';

const Type = ({ category }) => {
  console.log(category);
  console.log(eventTypes[2].name);
  const type = eventTypes.find((type) => type.name === category);
  const types = events.filter((event) => event.type === type.name);
  const color = 'black';
  return (
    <>
      <MetaTags
        name={type.name}
        description={type.description}
        image={`/images/fb/${slugify(type.name)}`}
      />
      <section className='bg-black evtypes'>
        <div className='container-wide center'>
          <div className='flex'>
            <Event
              type={type.name}
              color='black'
              nameClass='type-event'
              slug={slugify(type.name)}
            >
              <h1
                style={{ textShadow: 'none', fontSize: 50 }}
                className={color}
              >
                {type.name}
              </h1>
            </Event>

            <div className='right'>
              <h3>{type.name}</h3>
              <p>{type.description}</p>
            </div>
          </div>
        </div>
      </section>
      {types.length > 0 ? (
        <Timeline events={types} />
      ) : (
        <section>
          <div className='container'>
            <p>
              No upcoming events at the moment. <br /> Stay tuned for more
            </p>
          </div>
        </section>
      )}
    </>
  );
};
export default Type;
