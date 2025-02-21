import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className='bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent' >About Us</h2>
          <p>
            Welcome to Rubik Club, the cultural club of the MCA branch at Maulana Azad National Institute of Technology (MANIT). Our club aims to promote and nurture various talents among the students, providing them with a platform to showcase their skills and creativity. Each of these categories represents a vibrant community within our club, where members collaborate, learn, and grow together. Whether you're passionate about coding, dancing, singing, or expressing your creativity through design and visual arts, Rubik Club has something for everyone. At Rubik's Club MANIT, we organize regular meetups, workshops, and competitions to engage members and foster a spirit of friendly competition.
          </p>
          <div className="about-buttons">
            <button className="btn">Learn More</button>
            <button className="btn">Join Us</button>
          </div>
        </div>
        <div className="about-image">
          {/* You can add an image or any other content here */}
        </div>
      </div>
    </section>
  );
};

export default About;
