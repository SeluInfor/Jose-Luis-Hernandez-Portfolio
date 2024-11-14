import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import josePic from "../assets/josePic.jpg";

const Jose = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-violet-950 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
        {/* Contenedor de texto */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-16 text-5xl text-center sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16 lg:text-left sm:text-left"
            >
              {t("jose.name")}
            </motion.h1>

            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {t("jose.role")}
            </motion.span>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-3 max-w-xl py-6 font-light tracking-tighter"
            >
              {t("jose.description")}
            </motion.p>
          </div>
        </div>

        {/* Contenedor de imagen */}
        <div className="w-full lg:w-1/2  lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              src={josePic}
              alt="Jose Luis Hernández"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jose;
