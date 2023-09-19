//import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';



const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-me" element={<AboutMe/>} />
      <Route path="/contact-me" element={<ContactMe/>} />
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
  );
};

export default WebRoutes;
