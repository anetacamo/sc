import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import About from './layouts/About';
import EventLayout from './layouts/event';
import Home from './layouts/Home';
import Type from './layouts/Type';
import eventTypes from './texts/event-types.json';
import events from './texts/events.json';
import { slugify } from './utils/slugify';

function App() {
  events.sort(function (a, b) {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sweetcity' element={<Home />} />
        <Route path='/about' element={<About />} />
        {eventTypes.map((category) => (
          <Route
            key={category.name}
            path={`/${slugify(category.name)}`}
            element={<Type category={category.name} />}
          />
        ))}
        <Route path='/:category/:name' element={<EventLayout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
