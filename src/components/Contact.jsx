import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapPin, FaArrowUp } from "react-icons/fa";

const Contact = () => {
  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="relative border-b border-l-violet-950">
      {/* Motion para el título de Contacto */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
        className="my-20 text-center text-4xl"
      >
        Contact me
      </motion.h2>

      {/* Motion para los detalles de contacto */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="text-center tracking-tighter mb-10"
      >
        {/* Dirección */}
        <div className="flex items-center justify-center my-4">
          <FaMapPin className="mr-2" size={20} />
          <p>{CONTACT.address}</p>
        </div>

        {/* Correo Electrónico */}
        <div className="flex items-center justify-center my-4">
          <FaEnvelope className="mr-2" size={20} />
          <p>{CONTACT.email}</p>
        </div>

        {/* Número de Teléfono */}
        <div className="flex items-center justify-center my-4">
          <FaPhoneAlt className="mr-2" size={20} />
          <a href={`tel:${CONTACT.phoneNo}`}>{CONTACT.phoneNo}</a>
        </div>

        {/* Botón de scroll hacia arriba */}
        <button
          onClick={scrollToTop} 
          className="block my-8 mx-auto p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-200 w-max"
        >
          <FaArrowUp size={24} />
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
