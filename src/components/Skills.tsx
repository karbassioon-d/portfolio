import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';

const Skills = () => {
  return (
    <section className='h-screen'>
      <div>
        <motion.h1
        className="text-cyan-400"
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
        >
          Skills
        </motion.h1>
        <div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Skills