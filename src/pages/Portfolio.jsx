import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Aumentamos el tamaño del icono */}
      <i className="material-icons text-6xl text-blue-600 mb-4">description</i>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Descarga mi Portafolio
        </h1>
        <p className="text-base text-gray-700 mb-8">
          En esta sección puedes descargar mi portafolio para conocer más sobre mi trabajo y habilidades.
        </p>
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-base md:text-lg"
          href="../assets/Portafolio_Estudiantil.rar"  // Reemplaza con la ruta correcta
          download
        >
          Descargar Portafolio
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
