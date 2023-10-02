import gh from '../assets/gh.png';
import an from '../assets/an.png';
import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2, transition3 } from './MotionVariants';


const Experience = () => {
  return (
    <section className='h-screen flex flex-col'>
      <motion.h1 
        className="text-cyan-400 text-center font-josefin"
        initial={initialVariants}
        animate={animateVariants}
        transition={transition1}
       >
        Experience
      </motion.h1>
      <div className='flex flex-col m-4'>
        <motion.div
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        >
          <h2 className='font-josefin'>Goldn' Hours</h2>
          <div className='max-w-96 flex flex-col md:flex-row overflow-hidden bg-cover relative' >
            <img className="rounded w-96" src={gh} alt="Goldn' Hours" />
            <p className='font-josefin'>Goldn' Hours is the first weather based social media website for the professional photographer. You can upload photos and show the lighting and weather conditions in each post. Each of your posts shows up on a live map. Technologies used include React, FastAPI, MongoDB, Docker, Framer-motion and Tailwind CSS</p>
          </div>
        </motion.div>
        <motion.div
        initial={initialVariants}
        animate={animateVariants}
        transition={transition3}
        >
          <h2 className='font-josefin'>Autonexus</h2>
          <div className='flex flex-col md:flex-row overflow-hidden' >
            <img className="rounded w-96" src={an} alt="Autonexus" />
            <p className='font-josefin'>Autonexus is a fully car dealership management website. You can track your automobile inventory, sales, technicians, salespeople, and more. You can also make appointments for repairs. Technologies used include React, Django, Postgresql, Docker, and Bootstrap</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Experience