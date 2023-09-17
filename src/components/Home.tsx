import { motion } from 'framer-motion';
import { initialVariants, animateVariants, transition1, transition2, transition3, transition4 } from './MotionVariants';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import ud from '../assets/ud.svg';

const Home = () => {

  return (
    <section className='h-screen flex flex-col m-4'>
      <div>
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
        <motion.div
        initial={{opacity: 0, x: 400}}
        animate={{opacity: 1, x:0}}
        transition={{duration: 0.3, delay: 1.5, ease: [0, 0.71, 0.5, 1.01]}}
        className='flex'
        >
          <a target="blank" href="https://github.com/karbassioon-d">
            <motion.img whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} src={github} className='w-5 mr-2 hover:cursor-pointer' alt="github"/>
          </a>
          <a target="blank" href="https://www.linkedin.com/in/darakarbassioon/">
            <motion.img whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} src={linkedin} className='w-5 hover:cursor-pointer' alt="linkedin" />
          </a>
        </motion.div>
      </div>
      <div className='flex justify-center items-center'>
        <motion.img 
        initial={{opacity: 0, x: 200}}
        animate={{opacity: 1, x: 0}}
        transition={transition4}
        className="md:w-[1000px]" 
        src={ud} alt="svg"/>
      </div>
    </section>

  )
}

export default Home