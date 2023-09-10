//import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Portada from './pages/Portada';
import DescCurso from './pages/DescCurso';
import Presentacion from './pages/Presentacion';
import Asigs from './pages/Asigs';
import Clases from './pages/Clases';
import Conclusion from './pages/Conclusion';



const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portada" element={<Portada/>} />
      <Route path="/desc-curso" element={<DescCurso/>} />
      <Route path="/presentacion" element={<Presentacion/>}/>
      <Route path="/asignaciones" component={Asigs} />
      <Route path="/clases" component={Clases} />
      <Route path="/conclusion" component={Conclusion} />
    </Routes>
  );
};

export default WebRoutes;
