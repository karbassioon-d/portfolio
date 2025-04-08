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
import resume from "../assets/Dara K Full Stack Resume.pdf"
import { useState, useEffect } from "react";

const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const username = 'karbassioon-d';

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setAvatarUrl(data.avatar_url);
      })
      .catch(error => console.error('Error fetching GitHub profile: ', error));
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 pt-20">
    {/* Text Content */}
    <div className="flex-1 max-w-lg text-left md:ml-8">
      {avatarUrl && (
        <motion.img
          src={avatarUrl}
          alt="GitHub Profile"
          className="rounded-full w-24 h-24 mb-4 border-2 border-green-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
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
        <a target="_blank" href={resume} download="Dara K Full Stack Resume.pdf">
          <motion.button
            initial={{ scale: 1, filter: "drop-shadow(0 0 0px transparent)" }}
            whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 8px #32CD32)" }}
            transition={{ duration: 0.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-md 
            hover:bg-green-500/20 flex items-center gap-2 font-josefin text-sm transition-all"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Resume
          </motion.button>
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
