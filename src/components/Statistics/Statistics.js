import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2>We've been helping high-growth tech companies since 2017</h2>
      <div className="stats-container">
        <div className="stat">
          <h3>50+</h3>
          <p>B2B SAAS CLIENTS WORKED WITH</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p>BRAND & PRODUCT LAUNCHES</p>
        </div>
        <div className="stat">
          <h3>9+</h3>
          <p>PUBLICLY TRADED ENTERPRISES</p>
        </div>
        <div className="stat">
          <h3>$133B</h3>
          <p>TOTAL ESTIMATED CLIENT VALUATION</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
