import { motion } from "framer-motion";
import { initialVariants, animateVariants } from "./MotionVariants";

import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import postgresql from "../assets/postgresql.png";
import python from "../assets/python.png";
import reactIcon from "../assets/react.png";
import tailwind from "../assets/tailwindIcon.png";
import typescript from "../assets/typescript.png";
import sql from "../assets/sql.png";

const Skills = () => {
  const skillIconsLeft = [html, css, bootstrap, tailwind, sql, postgresql, mongodb];
  const skillIconsRight = [javascript, typescript, nextjs, reactIcon, python, django, nodejs];

  const skillCategories = [
    { title: "Front End", skills: ["JavaScript", "React", "TypeScript", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] },
    { title: "Back End", skills: ["Python", "Django", "Node.js"] },
    { title: "Database", skills: ["SQL", "PostgreSQL", "MongoDB"] },
    { title: "Other", skills: ["Git", "AWS"] },
  ];

  // Animation for the icons to come in from the bottom
  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center py-12 px-4 pt-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-green-500 font-josefin text-4xl md:text-5xl mb-6"
      >
        Skills
      </motion.h1>

      {/* Main Layout */}
      <div className="flex md:flex-row items-center justify-center gap-8 w-full">
        {/* Left Column: Icons */}
        <motion.div
          className="flex flex-col gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {skillIconsLeft.map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              title="Skill Icon"
              className="w-16 min-w-[3rem] sm:w-16 md:w-20 cursor-pointer"
              variants={iconVariants} // Icon animation
            />
          ))}
        </motion.div>

        {/* Center Column: Skill Cards */}
        <div className="flex flex-col gap-8 items-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={initialVariants}
              animate={animateVariants}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-green-400 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform lg:w-80"
            >
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3">{category.title}</h2>
              <ul className="text-center text-gray-800">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-lg font-josefin">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Icons */}
        <motion.div
          className="flex flex-col gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {skillIconsRight.map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              title="Skill Icon"
              className="w-16 min-w-[3rem] sm:w-16 md:w-20 cursor-pointer"
              variants={iconVariants} // Icon animation
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
