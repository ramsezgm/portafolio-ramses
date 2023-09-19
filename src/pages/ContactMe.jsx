//import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importa los iconos de react-icons
import contactImage from '../assets/contact.png'; // Reemplaza 'contact-image.jpg' con la URL o importación de tu imagen de fondo

const ContactMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Card mejorado para la sección de información de contacto */}
      <div className="bg-white rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={contactImage}
              alt="Imagen de contacto"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Contáctame!</h2>
            
            <div className="mb-4 text-center">
              <div className="mb-4">
                <div className="bg-blue-200 p-2 rounded-full inline-block">
                  <FaWhatsapp className="h-8 w-8 mr-2 text-blue-600" />
                </div>
                <a href="https://wa.me/63638956" className="text-xl font-medium text-blue-600 hover:underline ml-2">
                  Whatsapp
                </a>
              </div>
              <div className="mb-4">
                <div className="bg-blue-200 p-2 rounded-full inline-block">
                  <FaEnvelope className="h-8 w-8 mr-2 text-blue-600" />
                </div>
                <a href="mailto:ramses3127@gmail.com" className="text-xl font-medium text-blue-600 hover:underline ml-2">
                  Correo Electrónico
                </a>
              </div>
              <div className="mb-4">
                <div className="bg-blue-200 p-2 rounded-full inline-block">
                  <FaLinkedin className="h-8 w-8 mr-2 text-blue-600" />
                </div>
                <a
                  href="https://www.linkedin.com/in/rams%C3%A9s-guti%C3%A9rrez-683683238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-blue-600 hover:underline ml-2"
                >
                  Perfil de LinkedIn
                </a>
              </div>
              <div>
                <div className="bg-blue-200 p-2 rounded-full inline-block">
                  <FaTwitter className="h-8 w-8 mr-2 text-blue-600" />
                </div>
                <a
                  href="https://twitter.com/ramseZito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-blue-600 hover:underline ml-2"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
