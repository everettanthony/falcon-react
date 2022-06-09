import { Link } from 'react-router-dom';
import BannerImage from '../../app/assets/img/banners/banner1.jpg';
import AboutUs from '../../app/components/AboutUs/AboutUs';
import ServicesHome from '../../app/components/ServicesHome/ServicesHome';
import Locations from '../../app/components/Locations/Locations';
import Testimonials from '../../app/components/Testimonials/Testimonials';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home-banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="home-banner-body">
          <h1 className="home-banner-title">
            Dedicated to Providing Our Customers with Quality Document Services
          </h1>
          <Link to="/contact" className="btn-link">Schedule a Pick-Up</Link>
        </div>
        <div className="home-banner-overlay"></div>
      </div>
      <ServicesHome />
      <AboutUs />
      <Locations />
      <Testimonials />
    </div>
  );
}

export default Home;