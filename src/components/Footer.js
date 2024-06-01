import React from 'react';
import '../style/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Dedicated to helping you find the best exercises for your fitness journey.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/practical">Exercises</a></li>
          <li><a href="#contact">Contact</a></li>

          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact</h2>
          <p><i className="fas fa-phone-alt"></i> +234 8172710973</p>
          <p><i className="fas fa-envelope"></i> ajiboyemuyideen@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <a href="https://x.com/MuyideenAjiboye"><i className="fab fa-twitter"></i></a>
          <a href=" https://github.com/ajiboye7"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ajiboye-muyideen-b5a5291b0?trk=contact-info"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>&copy; 2024 Exercise Finder | Produced by Ajiboye</p>
      </div>
    </footer>
  );
};

export default Footer;
