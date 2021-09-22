import Home from './layouts/home';
import Type from './layouts/type';
import About from './layouts/about';
import EventLayout from './layouts/event';
import Header from './components/header';
import Footer from './components/footer';

import eventTypes from './event-types.json';
import events from './events.json';

import { slugify } from './utils/slugify';
import { Route, Switch } from 'react-router-dom';

function App() {
  // events.sort((a, b) => (a.date > b.date ? 1 : -1));
  events.sort(function (a, b) {
    // Sort by votes
    // If the first item has a higher number, move it down
    // If the first item has a lower number, move it up
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;

    // If the votes number is the same between both items, sort alphabetically
    // If the first item comes first in the alphabet, move it up
    // Otherwise move it down
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
  });
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        {eventTypes.map((type, index) => (
          <Route
            path={`/${slugify(type.name)}`}
            component={Type}
            exact
            key={index}
          />
        ))}
        <Route path='/:category/:name' component={EventLayout} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
