import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventTypes from '../texts/event-types.json';
import Hamburger from './Hamburger/Hamburger';
import Image from './Image';
import MegaMenu from './MegaMenu';
import MenuItem from './MenuItem';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='menu flex bg-black'>
      <Link to='/sc/'>
        <Image path='/logo.png' />
        <h4 className='second logo'>Sweet City</h4>
      </Link>
      {eventTypes.map((item, index) => (
        <MenuItem item={item} number={index + 1} key={index} />
      ))}
      <div className='hamburger mobile' onClick={() => setOpen(!open)}></div>
      <Hamburger open={open} handleClick={() => setOpen(!open)} />
      <MegaMenu open={open} handleClick={() => setOpen(!open)} />
    </div>
  );
};
export default Header;
