import { motion } from "framer-motion";
import {
  initialVariants,
  animateVariants,
  transition1,
  transition2,
  transition3,
} from "./MotionVariants";

import ny from "../assets/ny.svg";
import jp from "../assets/japan.svg";
import gb from "../assets/gb.svg";
import weights from "../assets/weights.svg";
import aomori from "../assets/aomori.jpg";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-16 pt-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-[1440px] mx-auto">
        {/* Text Content */}
        <motion.div
          initial={initialVariants}
          animate={animateVariants}
          transition={transition2}
          className="flex-1 text-left max-w-lg"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20, filter: "drop-shadow(0 0 0px transparent)" }}
            animate={{ opacity: 1, y: 0, filter: "drop-shadow(0 0 0px transparent)" }}
            whileHover={{ filter: "drop-shadow(0 0 8px #32CD32)" }}
            transition={{ duration: 0.5 }}
            className="text-green-500 font-josefin text-4xl md:text-5xl mb-6"
          >
          About
          </motion.h1>


          {/* Paragraph */}
          <p className="font-josefin text-lg leading-relaxed">
            I'm a <span className="text-green-400 font-bold">Los Angeles-based software engineer</span> with a 2017 graduation from
            <span className="text-green-400 font-bold"> New York University</span> and experience in building full-stack projects from scratch.
            In <span className="text-green-400 font-bold">2019</span>, I had the privilege of working in
            <span className="text-green-400 font-bold"> Aomori, Japan</span>, further enriching my skills and global perspective.
            Whether working independently or in collaborative teams, I'm dedicated to crafting
            <span className="text-green-400 font-bold"> innovative web applications</span> that solve real-world problems.
          </p>

          {/* Animated Icons */}
          <div className="flex gap-4 mt-6">
            <motion.img
              src={ny}
              alt="NY Icon"
              className="w-10 hover:scale-110 transition-transform"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            />
            <motion.img
              src={jp}
              alt="Japan Icon"
              className="w-10 hover:scale-110 transition-transform"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.img
              src={gb}
              alt="GB Icon"
              className="w-10 hover:scale-110 transition-transform"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            />
            <motion.img
              src={weights}
              alt="Weights Icon"
              className="w-10 hover:scale-110 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition3}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={aomori}
            alt="Aomori"
            className="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
