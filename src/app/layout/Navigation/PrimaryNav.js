import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar }from 'react-bootstrap/';
import { ReactComponent as FalconLogo } from '../../assets/img/logo/logo-falcon.svg';
import { ReactComponent as FalconLogoWhite } from '../../assets/img/logo/falcon-white.svg';

function PrimaryNav() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Link to="/" className="navbar-brand">
          <FalconLogo className="logo" title="Falcon Document Solutions" width="130" height="110" />
          <FalconLogoWhite className="logo-white" title="Falcon Document Solutions" width="48" height="48" />
        </Link>
        <a href="tel:817-870-0330" title="Call Us" className="link-phone">
          <span className="material-symbols-outlined icon-phone">call</span>
        </a>
        <Navbar.Collapse>
          <Link to="/services" className="nav-link" onClick={() => setExpanded(false)}>Services</Link>
          <Link to="/team" className="nav-link" onClick={() => setExpanded(false)}>Team</Link>
          <Link to="/location" className="nav-link" onClick={() => setExpanded(false)}>Location</Link>
          <Link to="/blogs" className="nav-link" onClick={() => setExpanded(false)}>Blog</Link>
          <Link to="/contact" className="nav-link" onClick={() => setExpanded(false)}>Contact</Link>
        </Navbar.Collapse>
        <Link to="/contact" className="btn-link btn-pickup">
          <span className="material-symbols-outlined icon-pickup me-2">schedule</span>
          <span>Schedule a Pick-Up</span>
        </Link>
      </Container> 
    </Navbar>
  );
}

export default PrimaryNav;