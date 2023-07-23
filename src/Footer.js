import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="foter">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} World of Laptops. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
