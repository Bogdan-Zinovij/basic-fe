import React from 'react';
import Container from '../Container';
import Form from '../Form';
import IconLocation from '../../images/icon-location.svg';
import IconPhone from '../../images/icon-phone.svg';
import IconEmail from '../../images/icon-email.svg';

import './index.scss';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-wrapper">
          <div className="form-widget-container">
            <Form />
          </div>
          <Logo />
          <div className="footer-main">
            <div className="contacts">
              <div className="location">
                <img src={IconLocation} alt="icon-location" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="handles">
                <div>
                  <img src={IconPhone} alt="icon-phone" />
                  +1-543-123-4567
                </div>
                <div>
                  <img src={IconEmail} alt="icon-email" />
                  example@fylo.com
                </div>
              </div>
            </div>
            <div className="links">
              <ul className="links-list">
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
              <ul className="links-list">
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
