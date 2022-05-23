import { Link } from 'react-router-dom';
import { Container, Navbar }from 'react-bootstrap/';
import { ReactComponent as FalconLogo } from '../../assets/img/logo/logo-falcon.svg';
import { ReactComponent as FalconLogoWhite } from '../../assets/img/logo/falcon-white.svg';
import Button from 'react-bootstrap/Button';

function PrimaryNav() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/" className="navbar-brand">
          <FalconLogo className="logo" title="Falcon Document Solutions" width="130" height="110" />
          <FalconLogoWhite className="logo-white" title="Falcon Document Solutions" width="48" height="48" />
        </Link>
        <a href="tel:817-870-0330" title="Call Us" className="link-phone"><i class="material-icons">phone</i></a>
        <Navbar.Collapse>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Navbar.Collapse>
        <Button variant="primary" className="btn-upload">
          <i class="material-icons">file_upload</i>
          <span>Upload Files</span>
        </Button>
      </Container> 
    </Navbar>
  );
}

export default PrimaryNav;