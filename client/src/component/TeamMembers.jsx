import React from 'react';
import './TeamMembers.scss'; // Import the SCSS file

const TeamMembers = () => {
  const members = [
    { id: 1, name: 'Member 1', text: 'Text', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Member 2', text: 'Text', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Member 3', text: 'Text', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Member 4', text: 'Text', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Member 5', text: 'Text', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="team-members">
      <div className="member-cards">
        {members.map((member, index) => (
          <div
            key={member.id}
            className={`member-card ${index % 2 == 0 ? 'lift-up' : 'lift-down'}`}
          >
            <div className="member-image">
              {/* Replace with an actual image src */}
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.text}</p>
              <button className="social-links">Social Links<b className='text-lg'> →</b></button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more">View More...</button>
    </div>
  );
};

export default TeamMembers;
