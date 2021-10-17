import React from 'react';

const Image = ({ nameClass, path, alt }) => {
  const staticPath = '';
  return (
    <img
      src={`/..${staticPath}/images${path}`}
      className={nameClass ? nameClass : null}
      alt={alt ? alt : path}
    />
  );
};
export default Image;
