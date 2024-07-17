import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <h2 className="animated-text">
        <span className="line">Digital Media Africa.</span>
      </h2>

      <h3 className="animated-text2">
        <span className="line">Pioneering marketing agency at the forefront of 360-degree digital marketing services</span>
      </h3>

      <button className="work-with-us-button" onClick={handleClick}>
        Work with Us
      </button>
    </section>
  );
}

export default Home;
