import React from 'react';

const Image = ({ nameClass, path, alt }) => {
  const staticPath = process.env.REACT_APP_PUBLIC_URL;
  return (
    <img
      src={`${staticPath}/images${path}`}
      className={nameClass ? nameClass : null}
      alt={alt ? alt : path}
    />
  );
};
export default Image;
