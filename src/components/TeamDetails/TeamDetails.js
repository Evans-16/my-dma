import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './TeamDetails.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JustinImage from '../../images/member/Justin1.jfif';
import JobImage from '../../images/member/Job.png';
import HenryImage from '../../images/member/Henry.png';
import MarlinImage from '../../images/member/Marlin.jpg';
import JohnImage from '../../images/member/John.png';
import JackieImage from '../../images/member/Jackie.png';
import YvonneImage from '../../images/member/Yvonne.jfif';

function TeamDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: JustinImage },
    { name: 'Job Ondicho', title: 'Operations Manager', img: JobImage },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Henry Getare', title: 'Community Manager', img: HenryImage },
    { name: 'Marlin Baraka', title: 'Head of Client Acquisition', img: MarlinImage },
    { name: 'Johnson Kinyanjui', title: 'Digital Media Manager', img: JohnImage },
    { name: 'Morris Njuguna', title: 'Digital Analytics Specialist', img: 'https://via.placeholder.com/100' },
    { name: 'Victor Mwenda', title: 'Dev Operations + SEO', img: 'https://via.placeholder.com/100' },
    { name: 'Jackie Njogu', title: 'Accounts Executive', img: JackieImage },
    { name: 'Yvonne Ndichu', title: 'Social & Community Manager', img: YvonneImage },
    { name: 'James Mbugua', title: 'Creative Director', img: 'https://via.placeholder.com/100' },
    { name: 'Eva Wangari', title: 'Media Buyer', img: 'https://via.placeholder.com/100' },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="team-details">
      <Slider {...carouselSettings}>
        <div className="company-overview">
          <h2>Overview</h2>
          <p>We are a leading digital media company dedicated to delivering innovative solutions to our clients. Our team of experts is passionate about driving results and helping businesses achieve their goals.</p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>Deliver Exceptional Value Through Impactful Messaging</p>
        </div>
        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Teamwork</li>
            <li>Customer Focus</li>
          </ul>
        </div>
      </Slider>

      <h2 className="team-details-heading">Our Full Team</h2>
      <div className="team-details-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamDetails;
