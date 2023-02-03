import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='about-content'>
          <span>Brennan Pilcher</span>
          <img src='./assets/headshot-small.jpg' />
        </div>
      </div>
    </>
  )
}

export default About;