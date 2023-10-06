import React from 'react';

const Hamburger = ({ open, handleClick }) => {
  return (
    <div className='hamburger mobile'>
      <div className='hamburger-menu' onClick={handleClick}>
        <div className={`bar-01 icon-bar ${open && 'opened'}`}></div>
        <div className={`bar-02 icon-bar ${open && 'opened'}`}></div>
        <div className={`bar-03 icon-bar ${open && 'opened'}`}></div>
      </div>
    </div>
  );
};

export default Hamburger;
