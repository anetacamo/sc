import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import Image from './Image';

const MenuItem = ({ item, number }) => {
  return (
    <Link to={`/sc/${slugify(item.name)}`}>
      <Image path={`/0${number}.png`} nameClass='desktop' />
      <h4 className={` ${item.color2} desktop hover-${item.colorHover}`}>
        {item.name}
      </h4>
    </Link>
  );
};
export default MenuItem;
