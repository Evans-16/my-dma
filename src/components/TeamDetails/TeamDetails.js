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

    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="paragraphs-container">
        <div className="paragraph">
          <p><strong>Innovative Solutions:</strong> We leverage the latest technologies and industry best practices to craft innovative solutions that drive business growth. Whether you're looking to enhance your digital presence, optimize your marketing efforts, or develop custom applications, we have the expertise to deliver results that exceed your expectations.</p>
        </div>
        <div className="paragraph">
          <p><strong>Data-Driven Approach:</strong> Our solutions are driven by data insights, ensuring that every decision is backed by thorough analysis and measurable results. From strategic planning to execution and performance tracking, we use data to continuously refine and optimize your digital strategy.</p>
        </div>
        <div className="paragraph">
          <p><strong>Customer-Centric Focus:</strong> We prioritize your success and are committed to building long-term partnerships. Our proactive and collaborative approach ensures that we understand your business goals and deliver solutions that align with your vision.</p>
        </div>
        <div className="paragraph">
          <p><strong>Exceptional Team:</strong> Our team comprises skilled professionals with diverse backgrounds in digital marketing, web development, design, and strategy. Together, we bring a wealth of experience and creativity to every project, ensuring that you receive top-notch service and outstanding results.</p>
        </div>
        <div className="paragraph">
          <p><strong>Proven Track Record:</strong> With a proven track record of delivering successful projects across various industries, we have earned the trust of numerous clients. Our portfolio showcases our ability to achieve tangible results and drive business growth for our partners.</p>
        </div>
        <div className="paragraph">
          <p><strong>Continuous Improvement:</strong> We are dedicated to continuous improvement and staying ahead of industry trends. By investing in ongoing training and adopting new technologies, we ensure that our solutions are always at the forefront of digital innovation.</p>
        </div>
      </div>
     </section>

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
