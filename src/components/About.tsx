import { motion } from 'framer-motion';
import { initialVariants, animateVariants, transition1, transition2, transition3 } from './MotionVariants';
import ny from '../assets/ny.svg'
import jp from '../assets/japan.svg'
import gb from '../assets/gb.svg'
import weights from '../assets/weights.svg'
import aomori from '../assets/aomori.jpg'

const About = () => {
  return (
    <section className='h-screen'>
      <div className="m-4">
        <div className='flex'>
          <motion.h1
            initial={initialVariants}
            animate={animateVariants}
            transition={transition1}
            className="text-cyan-400"
          >
            About
            </motion.h1>
            <motion.img
            initial={{opacity: 0, x: -200}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.3, delay: 0.4, ease: [0, 0.71, 0.2, 1.01],}}
            className="w-10" src={ny} />
            <motion.img 
            initial={{opacity: 0, x: -200, y: -200}}
            animate={{opacity: 1, x: 0, y: 0}}
            transition={{duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01],}}
            className="w-10" src={jp} />
            <motion.img 
            initial={{opacity: 0, y: -200}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: 0.6, ease: [0, 0.71, 0.2, 1.01],}}
            className="w-10" src={gb} />
            <motion.img 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.3, delay: 0.7, ease: [0, 0.71, 0.2, 1.01],}}
            className="w-10" src={weights} />
        </div>
        <motion.h3
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        >
         "I'm a Los Angeles-based software engineer with a 2017 graduation from New York University and experience in building full-stack projects from scratch. In 2019, I had the privilege of working in Aomori, Japan, further enriching my skills and global perspective. Whether working independently or in collaborative teams, I'm dedicated to crafting innovative web applications that solve real-world problems."
        </motion.h3>
        <div>
          <motion.img 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition3}
          className='rounded-xl' src={aomori} alt="" />
          {/* <img src={} alt="" /> */}
        </div>
      </div>
    </section>
  )
}

export default About