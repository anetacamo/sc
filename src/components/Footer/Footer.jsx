import React from 'react';
import Go from './../Go';
import Image from './../Image';

const Footer = () => {
  return (
    <>
      <footer className='bg-black'>
        <div className='container flex'>
          <div style={{ minWidth: '62%', paddingRight: 48 }}>
            <h4>About this project</h4>
            <p>
              <i>Sweet City</i> is a project that runs from August to the local
              election in November 2021. Throughout this period, up to 20
              events/meetings/podcasts will take place in and around Aarhus.
              This website gathers information and activities of the project -
              and will be updated continuously.
            </p>

            <p>
              <i>
                After more than a year of political state of emergency, it is
                time to reflect and to dream.
              </i>
            </p>
            <h4>Contact</h4>
            <p>
              <span className='blue'>Mathias Brander Skovsted</span>
              <br />
              mathias@frontloberne.dk
            </p>
          </div>
          <div>
            <h4>
              Sweet City is developed and run by the Aarhusian youth cultural
              platforms <Go to='https://www.frontloberne.dk/'>Frontloberne</Go>{' '}
              & <Go to='https://institutforx.dk/'>Institut for X</Go> &{' '}
              <Go to='https://ungdomskulturhuset.com/en-gb/home-en/'>
                Ungdomskulturhuset - UKH
              </Go>
            </h4>
            <div className='flex' style={{ alignItems: 'center' }}>
              <Go to='https://www.frontloberne.dk/' nameClass='imagelink large'>
                <Image path='/logos/fl.png' nameClass='inverted large' />
              </Go>
              <Go to='https://institutforx.dk/' nameClass='imagelink medium'>
                <Image path='/logos/x.png' nameClass='inverted' />
              </Go>
              <Go
                to='https://ungdomskulturhuset.com/en-gb/home-en/'
                nameClass='imagelink medium'
              >
                <Image path='/logos/ukh.jpeg' />
              </Go>
            </div>
            <h4>
              supported by{' '}
              <Go to='https://www.tuborgfondet.dk'>Tuborgfondet</Go> &
              <Go to='https://www.kulturregion.dk/en/'>Kulturregion</Go>
            </h4>
            <Go to='https://www.tuborgfondet.dk'>
              <Image path='/logos/tf.png' nameClass='imagelink large' />
            </Go>
            <Go to='https://www.kulturregion.dk/en/'>
              <Image path='/logos/erc.png' nameClass='imagelink large erc' />
            </Go>
            <h4>
              SWEET CITY, 2021 | illustration, design and code by{' '}
              <Go to='https://anetacamo.github.io'>Aneta Camo</Go>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
