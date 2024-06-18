// FAQs.js

import React, { useState, useEffect } from 'react';
import './FAQs.css';

const FAQs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const faqsData = [
    {
      question: 'What is Digital Media Africa?',
      answer: 'Digital Media Africa is a digital marketing agency...',
    },
    {
      question: 'How can I contact Digital Media Africa?',
      answer: 'You can contact us via email at digitalmediaafrica6@gmail.com',
    },
    {
      question: 'What services does Digital Media Africa offer?',
      answer: 'We offer a range of digital marketing services including SEO, PPC, social media marketing, and more...',
    },
    {
      question: 'How can Digital Media Africa help my business grow?',
      answer: 'Digital Media Africa can help your business grow by implementing strategic digital marketing campaigns that drive traffic, leads, and sales. We use data-driven insights and industry best practices to optimize your online presence and increase your ROI (Return on Investment). Whether you’re looking to increase brand awareness, generate more leads, or improve conversion rates, we have the expertise to help you succeed.',      },
    {
       question: 'What industries does Digital Media Africa specialize in?',
       answer: 'Digital Media Africa specializes in serving various industries, including but not limited to e-commerce, technology, finance, healthcare, education, and hospitality. Our team has experience working with diverse clients and understands the unique challenges and opportunities each industry faces in the digital landscape.',
    },
    {
      question: 'How does Digital Media Africa measure the success of digital marketing campaigns?',
      answer: 'At Digital Media Africa, we measure the success of our digital marketing campaigns using a combination of key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), cost-per-click (CPC), cost-per-acquisition (CPA), and return on ad spend (ROAS). We provide detailed analytics and reports to track campaign performance and make data-driven optimizations.',
    },
    {
      question: 'What sets Digital Media Africa apart from other digital marketing agencies?',
      answer: 'At Digital Media Africa, we differentiate ourselves through our commitment to delivering customized digital marketing solutions, exceptional client service, and continuous innovation. Our team consists of experienced digital marketers, analysts, and creatives who work collaboratively to achieve measurable results for our clients. We prioritize transparency, communication, and long-term partnerships with our clients.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqsData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
