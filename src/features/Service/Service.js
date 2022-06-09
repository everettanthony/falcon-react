import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectServicesMap } from '../../app/store/services/services.selector';
import { Link, useParams } from 'react-router-dom';
import './Service.scss';

function Service() {
  const { service } = useParams();
  const servicesMap = useSelector(selectServicesMap);
  const [serviceArray] = servicesMap.filter(item => item.route === service);
  const [serviceInfo, setServiceInfo] = useState(serviceArray);

  useEffect(() => {
    setServiceInfo(serviceArray);
  }, [serviceArray]);
  
  return (
    <div className="service">
      <div className="banner" style={{ backgroundImage: `url(${serviceInfo.imageUrl})` }}>
        <div className="banner-body">
          <h1 className="banner-title">
            {serviceInfo.name}
          </h1>
          <div className="banner-tagline">
            {serviceInfo.subTitle}
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="service-content">
        <div className="service-body" dangerouslySetInnerHTML={{__html: serviceInfo.body}}></div>
        <Link to="/services" className="btn-link btn-return">Return to Services</Link>
      </div>
    </div>
  );
}

export default Service;