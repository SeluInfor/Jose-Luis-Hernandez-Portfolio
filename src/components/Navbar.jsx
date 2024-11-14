import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción

const NavBar = () => {
  const { i18n } = useTranslation(); // Usamos el hook para cambiar el idioma

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-20 h-22" src={logo} alt="Logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Iconos de redes sociales */}
        <a  className= "hover:text-blue-800" href="https://www.linkedin.com/in/jose-luis-hernandez-387543318"><FaLinkedin /></a>
        <a  className= "hover:text-blue-800" href="https://github.com/SeluInfor"><FaGithub /></a>
      </div>

      {/* Conmutador de idioma */}
      <div className="flex gap-4 items-center">
        <button
          className="text-lg font-semibold p-2 hover:text-blue-500"
          onClick={() => changeLanguage('es')} // Cambiar a inglés
        >
          ES
        </button>
        <button
          className="text-lg font-semibold p-2 hover:text-blue-500"
          onClick={() => changeLanguage('en')} // Cambiar a español
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
