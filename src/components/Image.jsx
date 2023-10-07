import React from 'react';

const Image = ({ nameClass, path, alt }) => {
  const staticPath = 'https://anetacamo.github.io/sc/';
  return (
    <img
      src={`${staticPath}images${path}`}
      className={nameClass ? nameClass : null}
      alt={alt ? alt : path}
    />
  );
};
export default Image;
