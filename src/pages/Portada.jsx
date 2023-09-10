//import React from 'react';
import RamsesImg from '../assets/Ramses_Gutierrez.jpg';

const Portada = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 text-center max-w-2xl rounded-lg mb-12 max-h-screen overflow-y-auto">
        <h1 className="text-3xl font-bold">UNIVERSIDAD TECNOLÓGICA DE PANAMÁ</h1>
        <h2 className="text-xl font-semibold">FACULTAD DE INGENIERÍA DE SISTEMAS COMPUTACIONALES</h2>
        <h3 className="text-lg font-semibold">DEPARTAMENTO DE PROGRAMACIÓN</h3>
        <br />
        <h1 className="text-4xl font-bold">PORTAFOLIO DIGITAL ESTUDIANTIL</h1>
        <p className="text-2xl font-semibold">Curso: Desarrollo de Software VII</p>
        <img
          src={RamsesImg}
          alt="Ramses Gutierrez"
          className="mt-8 rounded-full h-60 mx-auto"
        />
        <p className="text-3xl font-semibold mt-4">PERTENECE A: RAMSÉS GUTIÉRREZ</p>
        <p className="text-xl font-semibold">CÉDULA: 8-998-1561</p>
        <br />
        <p className="text-xl font-semibold">FACILITADOR: KEXY RODRIGUEZ</p>
        <br />
        <p className="text-xl font-semibold">PANAMÁ - 2023</p>
      </div>
    </div>
  );
};

export default Portada;
