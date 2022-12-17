import React from 'react';
import Container from '../Container';
import IntroImg from '../../images/illustration-intro.png';
import './index.scss';
import ButtonPrimary from '../ButtonPrimary';

const Hero = () => {
  return (
    <header className="hero-section">
      <Container>
        <div className="hero-wrapper">
          <div className="into-img-container">
            <img src={IntroImg} alt="" />
          </div>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborate with <br />
            friends family, and co-workers.
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
