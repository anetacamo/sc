import React from 'react';
import eventTypes from '../texts/event-types.json';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MegaMenu = ({ open, handleClick }) => {
  const letterize = (name) => {
    var splitted = name.split('');
    var nameSpan = splitted.map((letter, index) => (
      <span
        key={index}
        className={
          letter === 's' || letter === 't' || letter === 'y'
            ? 'blue'
            : undefined
        }
      >
        {letter}
      </span>
    ));
    return nameSpan;
  };
  return (
    <div
      className={`flex megamenu bg-black ${!open && 'gone'}`}
      onClick={handleClick}
    >
      {eventTypes.map((type, index) => (
        <Link to={`/sc/${slugify(type.name)}`} key={index}>
          <h2 style={{ maxWidth: 44 * type.letterNum }}>
            {letterize(type.shortName)}
          </h2>
          <p>{type.short}</p>
        </Link>
      ))}
    </div>
  );
};
export default MegaMenu;
