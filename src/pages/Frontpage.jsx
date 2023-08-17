import React from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from './components/SvgBackground';
import './Frontpage.css';
import TypeWriterEffect from 'react-typewriter-effect';

function Frontpage() {
  return (
    <>
      <div className="profile-container" id="home_page">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hey there! 
                <span className="highlighted-text"> My name is Noelle</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1 style={{ display: 'flex', gap: '6px', color: '#fff' }}>
                  I am into
                  <span style={{ color: '#5198ff' }} className="type_effect">
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'Frontend Development',
                        'Backend Development',
                        'Wordpress',
                        ' Webflow',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                As a front-end developer, my goal is to craft visually appealing,
                 user-friendly, and high-performance web interfaces that enhance user experiences 
                 and contribute to the success of digital products and businesses. 
                 My expertise in HTML, CSS, JavaScript, and front-end frameworks enables me to create 
                 dynamic and engaging web applications that resonate with users across various devices and platforms.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <a href="#contact_page">
                <button className="btn primary-btn">Hire Me</button>
              </a>
              <a href="./Noelle_CV.docx" download>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <a href="about_myself" className="profile-picture-background"></a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
