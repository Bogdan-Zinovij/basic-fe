import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import './index.scss';

const Form = () => {
  return (
    <div className="form-widget">
      <h4 className="title">Get early access today</h4>
      <p className="desc">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input type="email" placeholder="email@example.com" />
        <ButtonPrimary>Get Started For Free</ButtonPrimary>
      </form>
    </div>
  );
};

export default Form;
