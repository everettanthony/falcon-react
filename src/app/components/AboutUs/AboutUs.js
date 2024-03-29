import { Link } from 'react-router-dom';
import ImgAbout from '../../assets/img/about.jpg';
import './AboutUs.scss';

function AboutUs() {
  return (
    <div className="about">
      <div className="about-col">
        <img src={ImgAbout} alt="Printing Fort Worth" width="835" height="368" />
      </div>
      <div className="about-col">
        <h2 className="about-hdr">About Us</h2>
        <p>Falcon Document Solutions isn't just about fulﬁlling your document imaging, 
          document scanning, process services, e-discovery or other copying needs. 
          We develop real relationships with our downtown Fort Worth and Dallas area 
          customers to provide what you need when you need it.</p>
        <Link to="/services" className="btn btn-primary about-btn">Learn More</Link>
      </div>
    </div>
  );
}

export default AboutUs; 