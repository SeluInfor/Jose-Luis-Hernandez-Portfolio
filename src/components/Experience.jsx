import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-violet-950 pb-4">
      {/* Título de la sección de experiencia */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-center text-4xl"
      >
        {/* Título de la sección */}
        {t("experience.title")}
      </motion.h1>

      <div>
       
        {t("experience.items", { returnObjects: true }).map(
          (experience, index) => {
            return (
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                {/* Año de la experiencia */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/4"
                >
                  <p className="mb-2 text-sm text-neutral-200">
                    {experience.year}
                  </p>
                </motion.div>

                {/* Detalles de la experiencia */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold text-cyan-100">
                    {experience.role}{" "}
                    <span className="font-thin tracking-tight italic text-pink-200">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="mb-5 text-neutral-200">
                    {experience.description}
                  </p>

                  {/* Tecnologías */}
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-300"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
