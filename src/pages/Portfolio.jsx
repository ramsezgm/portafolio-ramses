//import React from 'react';

const Portfolio = () => {
  // Función para manejar la descarga del portafolio
  const handleDownload = () => {
    // Reemplaza 'ruta_al_portafolio.pdf' con la ruta real de tu archivo de portafolio
    const portfolioUrl = 'ruta_al_portafolio.pdf';
    window.open(portfolioUrl, '_blank');
  };

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
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-base md:text-lg"
          onClick={handleDownload}
        >
          Descargar Portafolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
