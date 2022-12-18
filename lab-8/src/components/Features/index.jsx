import React from 'react';
import Container from '../Container';
import IconAnyFiles from '../../images/icon-any-file.svg';
import IconSecurity from '../../images/icon-security.svg';
import IconCollaboration from '../../images/icon-collaboration.svg';
import IconAccessAnywhere from '../../images/icon-access-anywhere.svg';

import './index.scss';

const Features = () => {
  const features = [
    {
      title: 'Access your files, anywhere',
      desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
      icon: IconAccessAnywhere,
    },
    {
      title: 'Security you can trust',
      desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
      icon: IconSecurity,
    },
    {
      title: 'Real-time collaboration',
      desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
      icon: IconCollaboration,
    },
    {
      title: 'Store any type of file',
      desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      icon: IconAnyFiles,
    },
  ];

  return (
    <section className="features-section">
      <Container>
        <ul className="features-list">
          {features.map(({ title, desc, icon }) => {
            return (
              <li key={icon} className="features-item">
                <div className="icon">
                  <img src={icon} alt={title} />
                </div>
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Features;
