import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b  border-violet-950 pb-4">
      <h2 className="my-20 text-center text-4xl"></h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
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
                className="w-full maw-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded px-2 py-1 text-sm font-medium text-pink-300 bg-neutral-900"
                    >
                      {tech}{" "}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
