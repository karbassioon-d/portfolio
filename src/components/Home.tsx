import { motion } from 'framer-motion';
import { initialVariants, animateVariants, transition1, transition2 } from './MotionVariants';

const Home = () => {

  return (
    <section className='h-screen flex flex-col'>
        <motion.h1 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition1}
          className="text-cyan-400">
          Dara Karbassioon
        </motion.h1>
        <motion.h3
          initial={initialVariants}
          animate={animateVariants}
          transition={transition2}
          className=''
        >
            Full Stack Developer
        </motion.h3>
    </section>

  )
}

export default Home