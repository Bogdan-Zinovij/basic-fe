import React from 'react';
import './index.scss';

const Container = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
