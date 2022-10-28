import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../../features/Home/Home';
import Services from '../../features/Services/Services';
import Team from '../../features/Team/Team';
import Location from '../../features/Location/Location';
import Blogs from '../../features/Blogs/Blogs';
import Contact from '../../features/Contact/Contact';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services/*" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="location" element={<Location />} />
        <Route path="blogs/*" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
