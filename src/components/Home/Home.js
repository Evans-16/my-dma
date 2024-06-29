import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='h-screen' id="home">
      <h2 className="animated-text">
        <span className="line ">Hi👋 welcome to Digital Media Africa. We are</span>
        <span className="line">an optimal performance striving agency</span>
        <span className="line">driven through data strategies.</span>
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
