import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchServicesStart } from '../../app/store/services/services.action';
import ServicesPreview from '../ServicesPreview/ServicesPreview';
import Service from '../Service/Service';
import './Services.scss';

function Services() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ServicesPreview />}></Route>  
      <Route path=':service' element={<Service />} />
    </Routes>
  );
}

export default Services;