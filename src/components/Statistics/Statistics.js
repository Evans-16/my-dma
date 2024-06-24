import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Statistics.css';

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="statistics" ref={ref}>
      <h2>We've been helping high-growth enterprises in Africa since 2015</h2>
      <div className="stats-container">
        <div className="stat">
          <h3>
            {inView && <CountUp start={0} end={100} duration={2.5} />}+
          </h3>
          <p>B2B SAAS CLIENTS WORKED WITH</p>
        </div>
        <div className="stat">
          <h3>
            {inView && <CountUp start={0} end={50} duration={2.5} />}+
          </h3>
          <p>BRAND & PRODUCT LAUNCHES</p>
        </div>
        <div className="stat">
          <h3>
            {inView && <CountUp start={0} end={50} duration={2.5} />}+
          </h3>
          <p>PUBLICLY TRADED ENTERPRISES</p>
        </div>
        <div className="stat">
          <h3>
            {inView && <CountUp start={0} end={200} duration={2.5} prefix="$" suffix="M+" />}
          </h3>
          <p>TOTAL ESTIMATED MANAGED BUDGETS</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
