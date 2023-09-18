import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';
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
      <div>
        <motion.h1
        className="text-cyan-400"
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
        >
          Skills
        </motion.h1>
      <div className="flex">
          <motion.img className="w-16" src={react} alt="React" />
          <motion.img className="w-16" src={javascript} alt="javascript" />
          <motion.img className="w-16" src={html} alt="html" />
          <motion.img className="w-16" src={css} alt="css" />
          <motion.img className="w-16" src={bootstrap} alt="bootstrap" />
          <motion.img className="w-16" src={tailwind} alt="tailwind" />
          <motion.img className="w-16" src={python} alt="python" />
          <motion.img className="w-16" src={django} alt="django" />
          <motion.img className="w-16" src={postgresql} alt="postgresql" />
          <motion.img className="w-16" src={typescript} alt="typescript" />
          <motion.img className="w-16" src={nextjs} alt="nextjs" />
          <motion.img className="w-16" src={nodejs} alt="nodejs" />
          <motion.img className="w-16" src={mongodb} alt="mongodb" />
        </div>
      </div>
      
    </section>
  )
}

export default Skills