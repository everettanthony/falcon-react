import { useSelector } from 'react-redux';
import { selectServicesMap, selectIsLoading } from '../../app/store/services/services.selector';
import ServicesList from '../../app/components/ServicesList/ServicesList';
import CallUs from '../../app/components/CallUs/CallUs';
import FalconStaff from '../../app/assets/img/banners/falcon-staff.jpg';
import Spinner from '../../app/components/Spinner/Spinner';
import './ServicesPreview.scss';

function ServicesPreview() {
  const servicesMap = useSelector(selectServicesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="service">
      <div className="banner" style={{ backgroundImage: `url(${FalconStaff})` }}>
        <div className="banner-body">
          <h1 className="banner-title">
            Our Services
          </h1>
          <div className="banner-tagline">
            At Falcon, we give businesses the solutions they need to make their job easier and more efficient.
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="services-list">
        {isLoading ? (
          <Spinner />
        ) : (
          <ServicesList services={servicesMap} />
        )}
      </div>
      <CallUs />
    </div>
  );
}

export default ServicesPreview;