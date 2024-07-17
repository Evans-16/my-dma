import React from 'react';
import './NewsletterPopup.css'; // Import CSS for styling

function NewsletterPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="close-container">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        
        <h2>NEWSLETTER</h2>
        <p>Subscribe now to receive the latest news.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterPopup;
