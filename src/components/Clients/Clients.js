import React, { useEffect, useState } from 'react';
import './Clients.css';

const clientLogos = [
  { src: 'images/logos/10189.png', alt: 'Digify'},
  { src: 'images/logos/10090.png', alt: 'Coca Cola' },
  { src: 'images/Stanbic.jpg', alt: 'Stanbic' },
  { src: 'images/logos/10074.png', alt: 'Car Duka' },
  { src: 'images/airtel.jpg', alt: 'Airtel' },
  { src: 'images/l1.jpg', alt: 'Nike' },
  { src: 'images/l2.png', alt: 'Ford' },
  { src: 'images/l3.jpg', alt: 'Fonterra' },
  { src: 'images/l4.jpeg', alt: 'TimeWarner' },
  { src: 'images/l5.jpg', alt: 'Honda' },
  { src: 'images/l6.png', alt: 'Diageo' },
  { src: 'images/l7.jpg', alt: 'Chanel' },
  { src: 'images/l8.png', alt: 'GeneralMils' },
  { src: 'images/l9.png', alt: 'UPS' },
  { src: 'images/l10.jpg', alt: 'Ikea' },
  { src: 'images/l11.png', alt: 'AmericanExpress' },
  { src: 'images/l12.jpg', alt: 'Colgate' },
  { src: 'images/logos/10046.png', alt: 'Britam'},
  { src: 'images/logos/10050.png', alt: 'JumboJet'},
  { src: 'images/logos/10053.png', alt: 'Kenya Airways'},
  { src: 'images/logos/10054.png', alt: 'Liberty'},
  { src: 'images/logos/10055.png', alt: 'Safaricom'},
  { src: 'images/logos/10057.png', alt: 'Betin'},
  { src: 'images/logos/10061.png', alt: 'Tuskys'},
  { src: 'images/logos/10062.png', alt: 'Kenya Power'},
  { src: 'images/logos/10076.png', alt: 'DW'},
];

const testimonials = [
  { text: "Digital Media Africa aims at delivering quality and refutable digital solutions for businesses looking to market their products", author: "Justin Ongeri, CEO" },
  { text: "Exceptional quality and attention to detail. Highly recommend!", author: "Jane Smith, Marketing Director at ABC Corp" },
  { text: "We've seen significant growth since partnering with them. Truly outstanding!", author: "Alice Johnson, COO of...." },
  //{ text: "We've seen significant growth since partnering with them. Truly outstanding!", author: "Ben Afleck, COO of Coca Cola" }
];

function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients">
      <h2>Our Clients</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === currentTestimonial ? 'active' : ''} ${index === currentTestimonial - 1 ? 'previous' : ''} ${index === currentTestimonial + 1 ? 'next' : ''}`}
          >
            <p>"{testimonial.text}"</p>
            <h4>— {testimonial.author}</h4>
          </div>
        ))}
      </div>

      <div className="carousel">
        <div className="carousel-track">
          {clientLogos.concat(clientLogos).map((logo, index) => (
            <div className="client" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
