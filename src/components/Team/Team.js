import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
import JustinImage from '../../images/member/Justin1.jfif';
import JobImage from '../../images/member/Job.png';
import HenryImage from '../../images/member/Henry.png';
import JohnImage from '../../images/member/John.png';

function Team() {
  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: JustinImage, },
    { name: 'Job Ondicho', title: 'Operations', img: JobImage },
    { name: 'Henry Getaro', title: 'Community Manager', img: HenryImage },
    { name: 'Johnson Kamau', title: 'Media Buyer', img: JohnImage },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
  ];

  const initialMembers = teamMembers.slice(0, 4);

  return (
    <section id="team">
      <h2>Meet The Team</h2>
      <div className="team-container">
        {initialMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
      <Link to="/team-details">
         <button>About Us</button>
      </Link>
    </section>
  );
}

export default Team;
