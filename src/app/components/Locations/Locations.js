import Towers from '../../assets/img/towers.jpg';
import './Locations.scss';

function Locations() {
  return (
    <div className="locations" style={{ backgroundImage: `url(${Towers})` }}>
      <div className="locations-content">
        <h2 className="locations-hdr">Location</h2>
        <div className="locations-addresses">
          <div className="locations-address">
            <div className="locations-address-hdr">Fort Worth</div>
            <p>301 Commerce Street, Suite 240 <br /> 
              Fort Worth, TX 76102 <br /> 
              <a href="https://goo.gl/maps/qYenfxp2QRn" 
                target="_blank" 
                className="locations-link" 
                rel="noreferrer">
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Locations;