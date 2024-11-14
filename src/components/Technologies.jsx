import { RiReactjsLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    boxShadow: [
      "0px 6px 20px rgba(0, 186, 255, 0.4)",  
      "0px 8px 24px rgba(0, 186, 255, 0.7)",  
      "0px 6px 20px rgba(0, 186, 255, 0.4)", 
    ],
    borderColor: [
      "rgba(0, 186, 255, 0.4)",  
      "rgba(0, 186, 255, 0.8)",  
      "rgba(0, 186, 255, 0.4)",  
    ],
    transition: {
      duration: 2,  
      repeat: Infinity,  
      repeatType: "loop",  
      ease: "linear", 
    },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-violet-950 pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">Technologies</h2>
      <motion.div className="flex flex-wrap items-center justify-center gap-6">
        
        {/* React Icon */}
        <motion.div
          whileInView={{ opacity: 1, scale:1}} // Animación de entrada
          whileOutOfView={{ opacity: 0, scale: 0.8 }} // Animación de salida
          initial={{ opacity: 0, scale: 0.8 }} // Inicialmente pequeño y opaco
          animate="animate" // Animación constante de sombra y borde
          variants={iconVariants} 
          transition={{ duration:0.3}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(0, 186, 255, 0.4)", 
            borderWidth: "3px" 
          }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* NestJS Icon */}
        <motion.div
          whileInView={{opacity: 1, scale:1}}
          whileOutOfView={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={{
            ...iconVariants,
            animate: {
              ...iconVariants.animate,
              boxShadow: [
                "0px 6px 20px rgba(238, 65, 65, 0.4)",  
                "0px 8px 24px rgba(238, 65, 65, 0.7)",  
                "0px 6px 20px rgba(238, 65, 65, 0.4)",  
              ],
              borderColor: [
                "rgba(238, 65, 65, 0.5)", 
                "rgba(238, 65, 65, 0.8)", 
                "rgba(238, 65, 65, 0.5)", 
              ],
            },
          }}
          transition={{ duration:0.4}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(238, 65, 65, 0.5)", 
            borderWidth: "3px" 
          }}
        >
          <SiNestjs className="text-7xl text-rose-500" />
        </motion.div>

        {/* Jest Icon */}
        <motion.div
          whileInView={{ opacity: 1, scale:1}}
          whileOutOfView={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={{
            ...iconVariants,
            animate: {
              ...iconVariants.animate,
              boxShadow: [
                "0px 6px 20px rgba(255, 140, 0, 0.4)",  
                "0px 8px 24px rgba(255, 140, 0, 0.7)",  
                "0px 6px 20px rgba(255, 140, 0, 0.4)",  
              ],
              borderColor: [
                "rgba(255, 140, 0, 0.5)", 
                "rgba(255, 140, 0, 0.8)", 
                "rgba(255, 140, 0, 0.5)", 
              ],
            },
          }}
          transition={{ duration:0.5}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(255, 140, 0, 0.5)", 
            borderWidth: "3px" 
          }}
        >
          <SiJest className="text-7xl text-amber-600" />
        </motion.div>

        {/* Laravel Icon */}
        <motion.div
          whileInView={{ opacity: 1, scale:1}}
          whileOutOfView={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={{
            ...iconVariants,
            animate: {
              ...iconVariants.animate,
              boxShadow: [
                "0px 6px 20px rgba(255, 0, 83, 0.4)",  
                "0px 8px 24px rgba(255, 0, 83, 0.7)",  
                "0px 6px 20px rgba(255, 0, 83, 0.4)",  
              ],
              borderColor: [
                "rgba(255, 0, 83, 0.5)", 
                "rgba(255, 0, 83, 0.8)", 
                "rgba(255, 0, 83, 0.5)", 
              ],
            },
          }}
          transition={{ duration:0.6}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(255, 0, 83, 0.5)", 
            borderWidth: "3px" 
          }}
        >
          <FaLaravel className="text-7xl text-red-800" />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          whileInView={{ opacity: 1, scale:1}}
          whileOutOfView={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={{
            ...iconVariants,
            animate: {
              ...iconVariants.animate,
              boxShadow: [
                "0px 6px 20px rgba(0, 117, 145, 0.4)",  
                "0px 8px 24px rgba(0, 117, 145, 0.7)",  
                "0px 6px 20px rgba(0, 117, 145, 0.4)",  
              ],
              borderColor: [
                "rgba(0, 117, 145, 0.5)", 
                "rgba(0, 117, 145, 0.8)", 
                "rgba(0, 117, 145, 0.5)", 
              ],
            },
          }}
          transition={{ duration:0.7}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(0, 117, 145, 0.4)", 
            borderWidth: "3px" 
          }}
        >
          <GrMysql className="text-7xl text-cyan-900" />
        </motion.div>

        {/* Docker Icon */}
        <motion.div
          whileInView={{opacity: 1, scale:1}}
          whileOutOfView={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate="animate"
          variants={{
            ...iconVariants,
            animate: {
              ...iconVariants.animate,
              boxShadow: [
                "0px 6px 20px rgba(0, 0, 216, 0.4)", 
                "0px 8px 24px rgba(0, 0, 216, 0.7)",  
                "0px 6px 20px rgba(0, 0, 216, 0.4)",  
              ],
              borderColor: [
                "rgba(0, 0, 216, 0.5)", 
                "rgba(0, 0, 216, 0.8)", 
                "rgba(0, 0, 216, 0.5)", 
              ],
            },
          }}
          transition={{ duration:0.8}}
          className="rounded-2xl p-6"
          style={{ 
            borderColor: "rgba(0, 0, 216, 0.5)", 
            borderWidth: "3px" 
          }}
        >
          <FaDocker className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
