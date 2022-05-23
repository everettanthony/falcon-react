import BannerImage from '../../app/assets/img/banners/banner1.jpg';
import AboutUs from '../../app/components/AboutUs/AboutUs';
import Services from '../../app/components/Services/Services';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home-banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="home-banner-body">
          <h1 className="home-banner-title">
            Dedicated to Providing Our Customers with Quality Document Services
          </h1>
          <button class="btn btn-primary">Schedule a Pick-Up</button>
        </div>
        <div className="home-banner-overlay"></div>
      </div>
      <Services />
      <AboutUs />
    </div>
  );
}

export default Home;