//import React from 'react';
import { Link } from 'react-router-dom';
import ImgRam from '../assets/Ramses_Gutierrez.jpg';

const imgStyle = {
  borderRadius: '50%', // Esto crea una máscara circular
};

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 md:p-12 lg:p-16 border-y border-black xl:border-hidden xl:rounded-xl flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 max-h-screen">
        {/* Contenido de inicio */}
        <div className="text-center md:text-left md:mr-8"> {/* Agrega margen derecho en pantallas medianas y más grandes */}
          <h1 className="text-4xl md:text-5xl max-w-md sm:max-w-xl md:max-w-none w-full leading-tight text-gray-800 font-bold">
            ¡Hola!
            <br />
            Soy Ramses Gutierrez
          </h1>
          <h2 className="w-full font-normal mt-4 text-gray-600 text-lg md:max-w-md">
            Un apasionado desarrollador de software nacido en Panamá
          </h2>
          {/* Utiliza Link para el botón */}
          <Link to="/about-me">
            <button className="border border-black bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300 mt-4 md:mt-6">
              Ver CV
            </button>
          </Link>
        </div>
        {/* Imagen de inicio */}
        <img
          style={{ ...imgStyle, height: 'auto', marginTop: '20px' }}
          src={ImgRam}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
