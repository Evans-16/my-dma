import React from 'react';
import './Home.css';

const Home = () => {

  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home">
        <h2 className="animated-text">
          <span className="line">Hi! welcome to Digital Media Africa Agency. We are</span>
          <span className="line">an optimal perfomance striving agency</span>
          <span className="line">through data driven strategies</span>
        </h2>
        <button className="work-with-us-button" onClick={handleClick}>
        Work with Us
        </button>
    </section>
  );
}

export default Home;
