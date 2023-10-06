import React from 'react';
import events from '../texts/events.json';
import MetaTags from '../components/MetaTags';
import Image from '../components/Image';

const Home = () => {
  const eventsWithQuotes = events.filter((event) => 'quotes' in event);
  let allquotes = [];
  eventsWithQuotes.map(
    (event) => (allquotes = [...allquotes, ...event.quotes])
  );
  return (
    <>
      <MetaTags
        name='About'
        description='Sweet City is a project that runs from August to the local election
            in November 2021.'
      />
      <section className='bg-black evtypes'>
        <div className='container-wide center'>
          <div className='flex'>
            <div>
              <Image path='/sweetcity_logo.png' nameClass='about-logo' />
            </div>
            <div className='right'>
              <h1>About this project</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-lightgray'>
        <div className='container'>
          <h2>
            <i>
              After more than a year of political state of emergency, it is time
              to reflect and to dream.
            </i>
          </h2>
          <p>
            Approaching the local elections in November 2021, Sweet City is a
            project that facilitates dialogue and amplifies the dreams and
            criticisms of the Aarhusian youth.
          </p>
          <p>
            In Aarhus, more than 45% of the population are under 30 years old.
            Aarhus is the most youthful city in Denmark. And yet, too many young
            people don’t feel heard and prioritized in the city development and
            the political debate. We are here to change that.
          </p>
          <p>
            Only by engaging, you can make a change. There are many ways to
            shape a better world and in Sweet City we do it by engaging in the
            political debate, by creating new political foras and by talking in
            new ways.
          </p>
        </div>
      </section>
    </>
  );
};
export default Home;
