import React from 'react';
import { Helmet } from 'react-helmet';
import { slugify } from '../utils/slugify';

const MetaTags = ({ name, description, image }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{name} | SweetCity2021</title>
      <meta name='description' content={description}></meta>
      <link rel='canonical' href='http://sweetcity.dk' />
      <meta name='keywords' content='politians, Aarhus, young, culture' />
      <meta name='author' content='Aneta Camo' />
      <meta
        property='og:url'
        content={`http://sweetcity.dk/${slugify(name)}`}
      />
      <meta property='og:title' content={`${name} | SweetCity2021`} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='da_DK' />
      <meta
        property='og:image'
        content={image ? image : '../images/sweetcity_logo.png'}
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@anetacamo' />
      <meta name='twitter:creator' content='@anetacamo' />
    </Helmet>
  );
};
export default MetaTags;
