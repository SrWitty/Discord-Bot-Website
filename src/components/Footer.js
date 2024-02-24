import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const brandStyle = {
    color: '#007bff',
  };

  const copyrightStyle = {
    color: '#007bff',
    fontSize: '14px',
    marginTop: '5px',
  };

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: '28293A',
    zIndex: 1000,
    background: 'white',  // Add this line
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.8)',  
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="py-2" animate-fade-in style={footerStyle}>
      <Container>
        <BootstrapNavbar.Brand href="#" style={brandStyle}>My Website</BootstrapNavbar.Brand>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} - Created by iim7md11
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Footer;
