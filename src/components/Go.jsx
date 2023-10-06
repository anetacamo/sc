import React from 'react';

const Go = ({ children, to, nameClass }) => {
  return (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      className={nameClass}
    >
      {children}
    </a>
  );
};
export default Go;
