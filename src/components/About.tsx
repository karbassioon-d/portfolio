import { motion } from 'framer-motion';
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';

const About = () => {
  return (
    <section className='h-screen'>
      <div className="m-4">
        <motion.h1
          initial={initialVariants}
          animate={animateVariants}
          transition={transition1}
          className="text-cyan-400"
        >
          About
          </motion.h1>
        <motion.p
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        >
          Dara as born at a young age. Thank you
        </motion.p>
      </div>
    </section>
  )
}

export default About