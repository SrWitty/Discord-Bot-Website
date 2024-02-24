import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const footerStyle = {
    backgroundColor: '#11101D',
   /* boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.8)',  */
  };

  return (
    <div className="mb-4 bg-white shadow-md animate-fade-in"> 
      <BootstrapNavbar className="navbar-dark" style={footerStyle} expand="lg">
        <Link to="/" className="navbar-brand text-white text-2xl font-bold transition-transform hover:scale-105" style={{ paddingLeft: '15px' }}>My Discord Bot</Link>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <NavItemLink to="/" label="Home" />
            <NavItemLink to="/about" label="About" />
            <NavItemLink to="/contact" label="Contact" />
            <NavItemLink to="/commands" label="Commands" />
            <NavItemLink to="/updates" label="Updates" />
            <NavItemLink to="/faq" label="FAQ" />
            <NavItemLink to="/developers" label="Developers" />
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

const NavItemLink = ({ to, label }) => (
  <Nav.Link as={Link} to={to} className="nav-link text-white hover:text-gray-300 transition-colors duration-300 relative">
    {label}
    <div className="nav-item-border bg-white h-1 w-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"></div>
  </Nav.Link>
);

export default Navbar;
