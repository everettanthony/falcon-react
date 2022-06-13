import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Modal, Navbar }from 'react-bootstrap/';
import { ReactComponent as FalconLogo } from '../../assets/img/logo/logo-falcon.svg';
import { ReactComponent as FalconLogoWhite } from '../../assets/img/logo/falcon-white.svg';

function PrimaryNav() {
  const [uploadShow, setUploadShow] = useState(false);
  const handleUploadClose = () => setUploadShow(false);
  const handleUploadShow = () => setUploadShow(true);

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/" className="navbar-brand">
          <FalconLogo className="logo" title="Falcon Document Solutions" width="130" height="110" />
          <FalconLogoWhite className="logo-white" title="Falcon Document Solutions" width="48" height="48" />
        </Link>
        <a href="tel:817-870-0330" title="Call Us" className="link-phone"><i className="material-icons">phone</i></a>
        <Navbar.Collapse>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/location" className="nav-link">Location</Link>
          <Link to="/blogs" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Navbar.Collapse>
        <Button variant="primary" className="btn-upload" onClick={handleUploadShow}>
          <i className="material-icons">file_upload</i>
          <span>Upload Documents</span>
        </Button>
      </Container> 
      
      <Modal centered show={uploadShow} onHide={handleUploadClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Files</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            Drag and Drop Files Here or Click to Upload
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleUploadClose}>Close</Button>
            <Button variant="primary" size="sm" onClick={handleUploadClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default PrimaryNav;