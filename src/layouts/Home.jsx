import React from 'react';
import { Link } from 'react-router-dom';
import EventsInLine from '../components/EventsInLine';
import EventTypes from '../components/EventTypes';
import Image from '../components/Image';
import MetaTags from '../components/MetaTags';
import Quotes from '../components/Quotes';
import Timeline from '../components/Timeline';
import eventTypes from '../texts/event-types.json';
import events from '../texts/events.json';
import { getCurrentDate } from '../utils/date';

const Home = () => {
  const eventsWithQuotes = events.filter((event) => 'quotes' in event);
  let allquotes = [];
  eventsWithQuotes.map(
    (event) => (allquotes = [...allquotes, ...event.quotes])
  );
  var upcoming = [];

  events.map((event) =>
    event.date > getCurrentDate() ? upcoming.push(event) : null
  );
  console.log('home is rendered');
  return (
    <>
      <MetaTags name='Home' description='Half a year of youthful politics' />
      <section className='full bg-black flex intro'>
        <h4 className='vertical time'>
          june to november <span className='red'>2021</span>
        </h4>
        <h4 className='vertical place'>
          <span className='red'>Aarhus</span>
        </h4>
        <div className='intro-bg'></div>
        <div className='container'>
          <h2 className='blue vertical date'>21.6. - 16.11.</h2>
          <h1>
            Sweet
            <br /> City
            <br /> 2021
          </h1>
          <p>Half a year of youthful politics in Aarhus</p>

          <Image path='/logo.png' nameClass='logo' />
          <div className='boom'>
            <Image path='/boom.png' nameClass='filter-red' />
            <h3>Change your city!</h3>
          </div>
        </div>
      </section>

      <section className='bg-lightgray center'>
        <div className='container'>
          <h2 className='blue'>
            About this
            <br /> project
          </h2>

          <h3>
            Sweet City is a project that runs from August
            <br /> to the local election in November 2021.
          </h3>
          <p>
            Throughout this period, up to 20 events/meetings/podcasts will take
            place in and around Aarhus. This website gathers information and
            activities of the project – and will be updated continuously.
          </p>
          <p>
            <i>
              After more than a year of political state of emergency,
              <br /> it is time to reflect and to dream.
            </i>
          </p>
          <Link to='/about'>
            <button>Read more about</button>
          </Link>
        </div>
      </section>

      <section className='center bg-blue evtypes'>
        <h2>Letters</h2>
        <p>Few of your letters</p>
        <div className='postcard-container'>
          <Image path='/postcards/Postkort1.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort2.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort3.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort4.jpeg' nameClass='logo' />
        </div>
        <div className='postcard-container'>
          <Image path='/postcards/Postkort5.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort6.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort7.jpeg' nameClass='logo' />
          <Image path='/postcards/Postkort9.jpeg' nameClass='logo' />
        </div>
      </section>

      <section className='center bg-black evtypes'>
        <h2>Make a change</h2>
        <p>
          Through four different formats, we seek to raise the voice of the
          youth and promote their reality at this vital political time:
        </p>
        <div className='container-wide center'>
          {eventTypes.map((type, index) => (
            <EventTypes
              type={type}
              key={index}
              description={type.short}
              isEven={index % 2 === 0}
              color='black'
            />
          ))}
        </div>
      </section>

      <Timeline events={events} color='white' />
      {allquotes.length > 0 && <Quotes quotations={allquotes} maxSlides={3} />}

      <section className='center'>
        <div className='container bg-talk filter-white'>
          <h2>Post a letter to your local politician</h2>
        </div>
      </section>
      <section className='center '>
        <p>
          There are six postboxes placed around Aarhus. Each letter will be
          delivered to relevant local polititian/party/institution before the
          elections. Some of the texts might be posted on the website.
        </p>
      </section>
      {/*
      <section className='center bg-white'>
        <h2>Write to your local polititian</h2>
        <p>
          There are six postboxes placed around Aarhus. Each letter will be
          delivered to relevant local polititian/party/institution before the
          elections. Some of the texts might be posted on the website.
        </p>
        <Image path='/letter2.png' nameClass='medium' />
        <p>
          <i>see the list of locations bellow</i>
        </p>
      </section>
*/}
      <section className='center bg-black bg-pattern'>
        <div className='flex-wrap flex-center'>
          <div
            className='container-wide flex flex-wrap'
            style={{ justifyContent: 'center' }}
          >
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>
                Studenter
                <br />
                huset
              </h2>
              <p>Mejlgade 53</p>
            </div>
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>
                Katedrale
                <br /> Skolen
              </h2>
              <p>Skolegyde 1-3</p>
            </div>
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>Frontløberne</h2>
              <p>Jægergårdsgade 154</p>
            </div>
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>FAIR BAR</h2>
              <p>Klostertorvet 6</p>
            </div>
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>UKH</h2>
              <p>Skovgaardsgade 5C</p>
            </div>
            <div className='container bg-postkase'>
              <h2 style={{ fontSize: 32 }}>
                Institut
                <br /> for (X)
              </h2>
              <p>Tage-Hansens Gade 8B</p>
            </div>
          </div>
        </div>
      </section>

      {upcoming.length > 1 && (
        <EventsInLine
          color='lightgray'
          title='Upcoming events'
          events={upcoming}
        />
      )}
    </>
  );
};
export default Home;
