import React, { useState } from 'react';
import Image from './Image';
import { slugify } from '../utils/slugify';

const Event = ({
  nameClass,
  color,
  type,
  children,
  slug,
  imageNum,
  imageStable,
}) => {
  const staticPath = 'https://anetacamo.github.io/sc/';
  const image = `url(${staticPath}images/events/${slug}/${
    imageNum || '1'
  }.jpg)`;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`ev-container ${nameClass}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className={`${slugify(type)} text`}>{children}</div>
      <div
        className={`inside ${slugify(type)}`}
        style={hovered ? inside(image) : imageStable && inside(image)}
      >
        <Image path={`/${slugify(type)}.png`} nameClass={`filter-${color}`} />
      </div>
    </div>
  );
};

const inside = (image) => ({
  backgroundImage: image,
});

export default Event;
