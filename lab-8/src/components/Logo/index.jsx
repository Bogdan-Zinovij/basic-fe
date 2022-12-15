import React from 'react';
import LogoImg from '../../images/logo.svg';
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={LogoImg} alt="logo" />
    </div>
  );
};

export default Logo;
