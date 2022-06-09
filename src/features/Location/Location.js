import CallUs from '../../app/components/CallUs/CallUs';
import Locations from '../../app/assets/img/banners/locations.jpg';

function Location() {
  return (
    <div className="location">
      <div className="banner" style={{ backgroundImage: `url(${Locations})` }}>
        <div className="banner-body">
          <h1 className="banner-title">
            Location
          </h1>
          <div className="banner-tagline">
            Proudly serving the Fort Worth and Dallas area.
            <div className="banner-offices">
              <div className="banner-office">
                <div className="banner-office-name">Fort Worth</div>
                <p>301 Commerce Street, Suite 240<br /> 
                Fort Worth, Texas 76102</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <CallUs />
    </div>
  );
}

export default Location;