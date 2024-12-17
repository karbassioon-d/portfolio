import { motion } from "framer-motion";
import {
  initialVariants,
  animateVariants,
  transition1,
  transition2,
  transition3,
} from "./MotionVariants";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import JapanSVGAnimation from "./JapanSVGAnimation";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 pt-20">
    {/* Text Content */}
    <div className="flex-1 max-w-lg text-left md:ml-8">
      <motion.h1
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
        className="text-green-500 font-josefin text-5xl md:text-6xl mb-4 leading-tight"
        style={{ textShadow: "2px 2px 6px rgba(0, 255, 0, 0.5)" }}
      >
        Dara Karbassioon
      </motion.h1>
      <motion.h3
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        className="font-josefin text-2xl md:text-3xl mb-2"
      >
        Full Stack Developer
      </motion.h3>
      <motion.h4
        initial={initialVariants}
        animate={animateVariants}
        transition={transition3}
        className="font-josefin text-lg text-gray-300 mb-6"
      >
        Crafting modern, scalable web apps with the right tools for your projects.
      </motion.h4>
  
      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex gap-4"
      >
        <a target="_blank" href="https://github.com/karbassioon-d" rel="noreferrer">
        <motion.img
          initial={{ scale: 1, filter: "drop-shadow(0 0 0px transparent)" }}
          whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px #32CD32)" }}
          transition={{ duration: 0.1 }}
          whileTap={{ scale: 0.9 }}
          src={github}
          className="w-10 hover:cursor-pointer transition-transform"
          alt="GitHub"
        />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/darakarbassioon/" rel="noreferrer">
        <motion.img
          initial={{ scale: 1, filter: "drop-shadow(0 0 0px transparent)" }}
          whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px #32CD32)" }}
          transition={{ duration: 0.1 }}
          whileTap={{ scale: 0.9 }}
          src={linkedin}
          className="w-10 hover:cursor-pointer transition-transform"
          alt="LinkedIn"
        />
        </a>
      </motion.div>
    </div>
  
    {/* Animation */}
    <motion.div
      className="flex-1 flex justify-center items-center max-w-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <JapanSVGAnimation />
    </motion.div>
  </section>
  
  );
};

export default Home;
