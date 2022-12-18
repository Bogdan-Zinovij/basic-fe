import React from 'react';
import Container from '../Container';
import './index.scss';
import IntroImg from '../../images/illustration-stay-productive.png';
import { ReactComponent as IconArrow } from '../../images/icon-arrow.svg';

const Info = () => {
  return (
    <section className="info-section">
      <Container>
        <div className="info-wrapper">
          <div className="info-img-wrapper">
            <img src={IntroImg} alt="" />
          </div>
          <div className="info-text">
            <h3>
              Stay productive, <br /> wherever you are
            </h3>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#" className="see-more-link">
              See how Fylo works <IconArrow />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
