import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2, transition3, transition4 } from './MotionVariants';
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import nextjs from '../assets/nextjs.png'
import nodejs from '../assets/nodejs.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwindIcon.png'
import typescript from '../assets/typescript.png'
import sql from '../assets/sql.png'

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};


const Skills = () => {
  return (
    <section className='flex flex-col h-screen'>
      <motion.h1
      className="text-green-500 text-center font-josefin pt-3"
      initial={initialVariants}
      animate={animateVariants}
      transition={transition1}
      >
        Skills
      </motion.h1>
      <div className="flex justify-center">
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 mr-3">
          <motion.img src={html} className="w-20" alt="html" variants={childVariants} />
          <motion.img src={css} className="w-20" alt="css" variants={childVariants} />
          <motion.img src={bootstrap} className="w-20" alt="bootstrap" variants={childVariants} />
          <motion.img src={tailwind} className="w-20" alt="tailwind" variants={childVariants} />
          <motion.img src={sql} className="w-20" alt="sql" variants={childVariants} />
          <motion.img src={postgresql} className="w-20" alt="postgresql" variants={childVariants} />
          <motion.img src={mongodb} className="w-20" alt="mongodb" variants={childVariants} />
        </motion.div>
        <div className="flex flex-col gap-9 items-center justify-around">
          <motion.div 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition2}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-green-400 rounded-md w-96">
            <h2 className="text-center font-josefin">Front End</h2>
            <ul className="text-center font-josefin">
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </motion.div>
          <motion.div 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition3}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-green-400 rounded-md w-96">
            <h2 className="text-center font-josefin">Back End</h2>
            <ul className="text-center font-josefin">
              <li>Python</li>
              <li>Django</li>
              <li>Node.js</li>
            </ul>
          </motion.div>
          <motion.div 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition4}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 to-green-400 rounded-md w-96">
            <h2 className="text-center font-josefin">Database</h2>
            <ul className="text-center font-josefin">
              <li>SQL</li>
              <li>Postgresql</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 ml-3">
          <motion.img src={javascript} className="w-20" alt="javascript" variants={childVariants} />
          <motion.img src={typescript} className="w-20" alt="typescript" variants={childVariants} />
          <motion.img src={nextjs} className="w-20" alt="nextjs" variants={childVariants} />
          <motion.img src={react} className="w-20" alt="react" variants={childVariants} />
          <motion.img src={python} className="w-20" alt="python" variants={childVariants} />
          <motion.img src={django} className="w-20" alt="django" variants={childVariants} />
          <motion.img src={nodejs} className="w-20" alt="nodejs" variants={childVariants} />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills