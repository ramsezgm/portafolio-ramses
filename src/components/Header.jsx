import  { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Header = () => {
  const Links = [
    { name: "PORTADA", link: "/portada" },
    { name: "DESCRIPCION CURSO", link: "/desc-curso" },
    { name: "PRESENTACION", link: "/presentacion" },
    { name: "ASIGNACIONES", link: "/asignaciones" },
    { name: "CLASES", link: "/clases" },
    { name: "CONCLUSION", link: "/conclusion" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="bg-white py-4 px-7 mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Parte izquierda con el logo y "Portafolio" */}
        <div className="flex items-center">
          <div className="w-7 h-7 text-blue-600">
            <BookOpenIcon />
          </div>
          <Link to="/" className="text-2xl font-bold ml-2 text-blue-600 hover:text-blue-400">
            Portafolio
          </Link>
        </div>
        {/* Parte derecha con el icono de cierre (X) y las opciones */}
        <div className="md:flex items-center">
          {/* Botón de hamburguesa (para dispositivos móviles) */}
          <div className="md:hidden w-7 h-7 cursor-pointer ml-4" onClick={() => setOpen(!open)}>
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* Opciones de navegación */}
          <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'block' : 'hidden'} md:block`}>
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link to={link.link} className="text-gray-800 hover:text-blue-400 duration-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;