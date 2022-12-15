import React from 'react';
import Container from '../Container';
import Logo from '../Logo';

import './index.scss';

const Navigation = () => {
  return (
    <nav>
      <Container>
        <div className="navigation-wrapper">
          <Logo />
          <ul className="nav-links">
            <li className="nav-link">Features</li>
            <li className="nav-link">Team</li>
            <li className="nav-link">Sign In</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
