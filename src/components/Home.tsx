import { motion } from 'framer-motion';
import { initialVariants, animateVariants, transition1, transition2, transition3, transition4 } from './MotionVariants';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import JapanSVGAnimation from './JapanSVGAnimation';
import ud from '../assets/ud.svg';

const Home = () => {

  return (
    <section className='h-screen flex items-center '>
      <div className="md:mx-40">
        <motion.h1 
          initial={initialVariants}
          animate={animateVariants}
          transition={transition1}
          className="text-green-500 font-josefin">
          Dara Karbassioon
        </motion.h1>
        <motion.h3
          initial={initialVariants}
          animate={animateVariants}
          transition={transition2}
          className='font-josefin'
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
            <motion.img whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} src={github} 
            className='w-8 mr-2 hover:cursor-pointer' alt="github"/>
          </a>
          <a target="blank" href="https://www.linkedin.com/in/darakarbassioon/">
            <motion.img whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} src={linkedin} 
            className='w-8 hover:cursor-pointer' alt="linkedin" />
          </a>
        </motion.div>
      </div>
      <div>
        <JapanSVGAnimation />
      </div>
    </section>

  )
}

export default Home