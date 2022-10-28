import { Link } from 'react-router-dom';
import { ReactComponent as FalconLogo } from '../assets/img/logo/logo-falcon.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <Link to="/" className="navbar-brand">
            <FalconLogo title="Falcon Document Solutions" width="220" height="187" />
          </Link>
        </div>
        <div className="footer-col">
          <div className="footer-hdr">Menu</div>
          <div className="footer-menu">
            <Link to="/services">Services</Link>
            <Link to="/team">Team</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-hdr">Location</div>
          <div className="footer-locations">
            <div className="footer-office">
              <div className="footer-office-name">Fort Worth</div>
              301 Commerce Street, Suite 240 <br/>
              Fort Worth, Texas 76102
            </div>
          </div>  
        </div>
        <div className="footer-col">
          <div className="footer-hdr">Call Us</div>
          <div className="footer-locations">
            <div className="footer-office">
              <div className="footer-office-name">Fort Worth</div>
              <a href="tel:817-870-0330" className="footer-office-phone">817-870-0330</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;