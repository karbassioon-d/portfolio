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


const Skills = () => {
  return (
    <section className='flex flex-col h-screen'>
      <motion.h1
      className="text-cyan-400 text-center font-josefin"
      initial={initialVariants}
      animate={animateVariants}
      transition={transition1}
      >
        Skills
      </motion.h1>
      <div className="flex flex-col gap-9 items-center justify-around">
        <motion.div 
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-md w-96">
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
        className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-md w-96">
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
        className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-md w-96">
          <h2 className="text-center font-josefin">Database</h2>
          <ul className="text-center font-josefin">
            <li>SQL</li>
            <li>Postgresql</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills