//import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 md:p-10 lg:p-0 border-y border-black xl:border-hidden xl:rounded-xl flex flex-col md:flex-row justify-between items-center px-5 md:px-10 lg:px-20 space-y-5 md:space-y-0 max-h-screen overflow-y-auto">
        {/* Contenido de inicio */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl max-w-md sm:max-w-xl md:max-w-none w-full leading-tight text-gray-800">
            ¡Hola!
            <br />
            Soy Ramses Gutierrez
          </h1>
          <h2 className="w-full font-normal mt-4 text-gray-600 text-lg md:max-w-md">
            Desarrollador de software
          </h2>
          {/* Utiliza Link para el botón */}
          <Link to="/presentacion">
            <button className="border border-black bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300 mt-4 md:mt-6">
              Ver CV
            </button>
          </Link>
        </div>
        {/* Imagen de inicio */}
        <img
          className="hidden sm:inline-flex h-60 lg:h-80 xl:h-full mt-6 md:mt-0"
          src="https://shubh73-medium.vercel.app/M.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
