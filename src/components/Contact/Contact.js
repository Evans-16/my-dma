import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [msg, setMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);
    setMsg('Sending message...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzeqWzGwqR6sBwj1_j0unjHl2wsUCftAAJdMD0fw2fkrsFT7AVuWbaXSsiA8x44LAoZ/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(response => response.json())
      .then(response => {
        if (response.result === 'success') {
          setMsg('Message sent successfully');
          form.reset();
        } else {
          setMsg('Error sending message');
        }

        setTimeout(() => {
          setMsg('');
          setIsSubmitting(false);
        }, 2000); 
      })
      .catch(error => {
        setMsg('Error sending message');
        setTimeout(() => {
          setMsg('');
          setIsSubmitting(false);
        }, 2000); 
      });
  };

  return (
    <section id="contact">
      <div className="contact-left">
        <h1 className="sub-title">Contact Us</h1>
        <p><i className="fa fa-phone"></i>+254 727 552517</p>
        <p><i className="fa fa-envelope"></i>digitalmediaafrica6@gmail.com</p>
        <p><i className="fa fa-whatsapp"></i>+254 727 552517</p>
        <div className="location">
          <h2>Our Location</h2>
          <p><i className="fa-solid fa-location-dot"></i>Westcom Point, Off Waiyaki Way, Nairobi</p>
        </div>
        <div className="contact-left-connect">
          <p>Connect with us</p>
        </div>
        <div className="social-icons">
          <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="#instagram"><i className="fa fa-instagram"></i></a>
          <a href="#facebook"><i className="fa fa-facebook"></i></a>
          <a href="#x"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#youtube"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
      <div className="contact-right">
        <div className="form-container">
          <p>Fill out this form and we will reach out to you</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <input type="text" name="Number" placeholder="Your Number" required />
            <textarea name="Message" rows="3" placeholder="Your Message"></textarea>
            {!isSubmitting && <button type="submit">Send Message</button>}
            {msg && <span id="msg" className={isSubmitting ? 'sending' : msg === 'Message sent successfully' ? 'success' : 'error'}>{msg}</span>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
