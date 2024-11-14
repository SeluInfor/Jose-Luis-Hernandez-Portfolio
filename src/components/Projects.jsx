import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(); 

  return (
    <div className="border-b border-violet-950 pb-4">
      {/* Título de la sección de proyectos */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-center text-4xl"
      >
        {t("projects.title")} 
      </motion.h2>

      <div>
       
        {t("projects.items", { returnObjects: true }).map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/4"
              >
                
                <img
                  src={project.img} 
                  width={200}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded px-2 py-1 text-sm font-medium text-pink-300 bg-neutral-900"
                  >
                    {tech}{" "}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
