import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2>We've been helping high-growth enterprises in Africa since 2015</h2>
      <div className="stats-container">
        <div className="stat">
          <h3>100+</h3>
          <p>B2B SAAS CLIENTS WORKED WITH</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>BRAND & PRODUCT LAUNCHES</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>PUBLICLY TRADED ENTERPRISES</p>
        </div>
        <div className="stat">
          <h3>$200M+</h3>
          <p>TOTAL ESTIMATED MANAGED BUDGETS</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
