//import React from 'react';
import imgRam from '../assets/Ramses_Gutierrez.jpg';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start pt-16 pb-16">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagen circular */}
          <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={imgRam}
              alt="Tu imagen"
            />
          </div>

          {/* Información de texto */}
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              ¡Hola! Soy Ramsés Gutiérrez
            </h1>
            <br />
            <p className="text-base md:text-lg text-gray-700 mt-4">
              Estudiante de tercer año en la Universidad Tecnológica de Panamá,
              cursando la carrera de Desarrollo de Software. Mi objetivo es
              utilizar mis habilidades para desarrollar software de calidad y
              enfrentar desafíos tecnológicos. <br />
              Además de programar, disfruto de la música como fuente de
              inspiración, y la ciencia ficción en mis momentos de lectura y
              películas.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-base md:text-lg">
              Descargar CV
            </button>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-t border-gray-300 mt-6 md:mt-8" />

        {/* Sección de Estudios Académicos */}
        <div className="mt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Estudios Académicos
          </h2>
          {/* Aquí puedes agregar tus estudios académicos */}
          <div className="mt-4 md:mt-6">
            {/* Estudio 1 */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Bachiller en Tecnología e Informática
              </h3>
              <p className="text-gray-600">Instituto José Dolores Moscote</p>
              <p className="text-gray-600">2018 - 2020</p>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                Obtuve conocimientos de programación en HTML, CSS, Visual Basic. También se aplicó el uso de herramientas de multimedia.
              </p>
            </div>

            {/* Estudio 2 */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Licenciatura en Desarrollo de Software
              </h3>
              <p className="text-gray-600">Universidad Tecnológica de Panamá</p>
              <p className="text-gray-600">2021 - Actualidad</p>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                Actualmente estoy cursando esta carrera, donde he adquirido conocimientos en programación en Java, PHP, JavaScript, HTML, CSS, C++, SQL, etc. Además, he aprendido metodologías de desarrollo de software y el uso de herramientas de desarrollo.
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-t border-gray-300 mt-6 md:mt-8" />

        {/* Sección de Experiencia Profesional */}
        <div className="mt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Experiencia Profesional
          </h2>
          {/* Aquí puedes agregar tus experiencias */}
          <div className="mt-4 md:mt-6">
            {/* Experiencia 1 */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Agente de Ventas
              </h3>
              <p className="text-gray-600">Distexsa</p>
              <p className="text-gray-600">Diciembre 2021 - Marzo 2023</p>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                Encargado de la supervisión de ventas y atención al cliente de los colegios asignados. Como labores incluía la elaboración de reportes de venta, atención al cliente y supervisión del proceso de entrega de los productos.
              </p>
            </div>

            {/* Experiencia 2 */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Bodeguero
              </h3>
              <p className="text-gray-600">Distexsa</p>
              <p className="text-gray-600">Enero 2023 - Abril 2024</p>
              <p className="text-gray-700 mt-2 text-base md:text-lg">
                Las labores que este rol incluía eran la recepción de mercancía, verificación y el almacenamiento de la misma. Además de la preparación de pedidos para los clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-t border-gray-300 mt-6 md:mt-8" />

        {/* Sección de Habilidades */}
        <div className="mt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Habilidades
          </h2>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row">
            {/* Habilidades Blandas */}
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Habilidades Blandas
              </h3>
              <ul className="text-gray-700 mt-2 text-base md:text-lg list-disc pl-4">
                <li>Comunicación efectiva</li>
                <li>Trabajo en equipo</li>
                <li>Pensamiento crítico</li>
                <li>Resolución de problemas</li>
                <li>Adaptabilidad</li>
              </ul>
            </div>

            {/* Habilidades Técnicas */}
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Habilidades Técnicas
              </h3>
              <ul className="text-gray-700 mt-2 text-base md:text-lg list-disc pl-4">
                <li>Java</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>C++</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
