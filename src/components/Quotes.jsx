import React, { useEffect, useState } from 'react';

const Quotes = ({ quotations, maxSlides }) => {
  const slides =
    maxSlides !== undefined ? maxSlides - 1 : quotations.length - 1;

  const [currentQuoteNumber, setCurrentQuoteNumber] = useState(0);
  const [fade, setFade] = React.useState(false);

  quotations = quotations.slice(0, maxSlides);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(function () {
        setFade(true);
      }, 2000);
      handleRightArrowClick();
      setTimeout(function () {
        setFade(false);
      }, 3000);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuoteNumber]);

  const handleArrowClick = () => {
    setCurrentQuoteNumber(
      currentQuoteNumber !== 0 ? currentQuoteNumber - 1 : slides
    );
  };

  const handleRightArrowClick = () => {
    setCurrentQuoteNumber(
      currentQuoteNumber !== slides ? currentQuoteNumber + 1 : 0
    );
  };

  return (
    <section className='center bg-lightgray'>
      <div className='container-wide'>
        <h2>what do people say?</h2>

        <div class='flex-center center'>
          {quotations.map((quote, index) => (
            <img
              src='/../images/03.png'
              alt='quote icon'
              key={index}
              onClick={() => setCurrentQuoteNumber(index)}
              className={`small ${
                index === currentQuoteNumber ? 'filter-blue' : null
              }`}
            />
          ))}
        </div>

        <div class='center flex-between'>
          <img
            src='/../images/left.png'
            alt='arrow left'
            className='arrow'
            onClick={handleArrowClick}
          />

          <div className='quote'>
            <p className={`${fade && 'dissapear'}`}>
              {quotations[currentQuoteNumber]}
            </p>
          </div>

          <img
            src='/../images/right.png'
            alt='arrow right'
            className='arrow'
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
    </section>
  );
};
export default Quotes;
