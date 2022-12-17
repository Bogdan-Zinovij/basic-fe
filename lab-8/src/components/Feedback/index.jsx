import React from 'react';
import Container from '../Container';
import Profile1Img from '../../images/profile-1.jpg';
import Profile2Img from '../../images/profile-2.jpg';
import Profile3Img from '../../images/profile-3.jpg';
import './index.scss';

const Feedback = () => {
  const data = [
    {
      content:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      name: 'Satish Patel',
      position: 'Founder & CEO, Huddle',
      profileImg: Profile1Img,
    },
    {
      name: 'Bruce McKenzie',
      position: 'Founder & CEO, Huddle',
      profileImg: Profile2Img,
      content:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
    {
      name: 'Iva Boyd',
      profileImg: Profile3Img,
      position: 'Founder & CEO, Huddle',
      content:
        'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    },
  ];

  return (
    <section className="feedback-section">
      <Container>
        <div className="feedback-wrapper">
          <div className="cards-container">
            {data.map(({ name, position, content, profileImg }) => {
              return (
                <div key={profileImg} className="feedback-card">
                  <p className="feedback-content">{content}</p>
                  <div className="feedback-profile">
                    <div className="user-img-wrapper">
                      <img src={profileImg} alt="" />
                    </div>
                    <div className="user-info">
                      <p className="name">{name}</p>
                      <p className="position">{position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
